"use client";

import client from "@/app/axiosClient";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface PaymentResponse {
  payment_session_id: string;
  order_id: string;
  order_expiry_time?: string;
  message?: string;
}

type CashfreeMode = "production" | "sandbox";
type CashfreeInstance = NonNullable<Awaited<ReturnType<typeof load>>>;

const RECOMMENDED_AMOUNTS = [500, 1000, 1500, 2000];

const Checkout = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const cashfreeRef = useRef<CashfreeInstance | null>(null);

  const mode: CashfreeMode =
    (process.env.NEXT_PUBLIC_CASHFREE_MODE as CashfreeMode) ?? "production";

  useEffect(() => {
    let cancelled = false;

    async function initSdk() {
      try {
        const instance = await load({ mode });
        if (!cancelled && instance) {
          cashfreeRef.current = instance;
          setSdkReady(true);
        }
      } catch (err) {
        console.error("[Cashfree SDK init error]", err);
      }
    }

    initSdk();
    return () => {
      cancelled = true;
    };
  }, [mode]);

  const handlePayment = useCallback(async () => {
    const topupAmount = amount.trim();

    if (!topupAmount || Number(topupAmount) < 1) {
      toast.error("Please enter a valid amount.");
      return;
    }

    if (!cashfreeRef.current) {
      toast.error("Payment SDK is still loading. Please try again.");
      return;
    }

    setLoading(true);
    try {
      // Same as mobile app: POST /cashfree/create-order { amount }
      const res = await client.post<PaymentResponse>("/cashfree/create-order-web", {
        amount: topupAmount,
      });

      const data = res.data;
      if (!data?.payment_session_id) {
        toast.error("Invalid response from server (missing payment_session_id).");
        return;
      }

      await cashfreeRef.current.checkout({
        paymentSessionId: data.payment_session_id,
        redirectTarget: "_self",
      });
    } catch (err) {
      const axiosErr = err as AxiosError<{ message?: string }>;
      const message =
        axiosErr.response?.data?.message ??
        (err instanceof Error ? err.message : "Payment could not be started");
      console.error("[Cashfree payment error]", err);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, [amount]);

  return (
    <div className="min-h-[70vh] bg-[#f5f5f5] text-gray-900 max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Topup Wallet</h1>
      <p className="text-gray-600 mb-8 text-center">
        Add money to your wallet via Cashfree Payment Gateway.
      </p>

      <div className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Enter amount
          </label>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#582898] focus:border-[#582898]"
          />
        </div>

        <p className="text-sm text-gray-600">Recommended</p>
        <div className="flex flex-wrap gap-2">
          {RECOMMENDED_AMOUNTS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(String(value))}
              className="border border-[#582898] text-[#582898] bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-[#582898]/10"
            >
              ₹{value}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePayment}
          disabled={loading || !sdkReady}
          className="w-full mt-4 bg-[#582898] hover:bg-[#4a227f] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {loading ? "Processing…" : !sdkReady ? "Loading payment…" : "PROCEED TO TOPUP"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
