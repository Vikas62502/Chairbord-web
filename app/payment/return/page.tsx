"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import client from "@/app/axiosClient";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

function PaymentReturnContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [status, setStatus] = useState<"loading" | "success" | "failed" | "unknown">("loading");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      setStatus("unknown");
      return;
    }

    async function checkOrder() {
      try {
        const token = localStorage.getItem("cbpl-token");
        const orderStatusPath =
          process.env.NEXT_PUBLIC_CASHFREE_ORDER_STATUS_PATH ?? "/cashfree/order-status";
        const res = await client.get<{ order_status?: string }>(
          orderStatusPath,
          {
            params: { order_id: orderId },
            ...(token ? { headers: { Authorization: `Bearer ${token}` } } : {}),
          }
        );

        const order_status = res.data?.order_status;
        if (order_status === "PAID") {
          setStatus("success");
          setOrderStatus("PAID");
        } else if (order_status) {
          setOrderStatus(order_status);
          setStatus("failed");
        } else {
          setStatus("unknown");
        }
      } catch {
        setStatus("unknown");
      }
    }

    checkOrder();
  }, [orderId]);

  return (
    <div>
      <Header />
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
        {status === "loading" && (
          <p className="text-gray-600">Verifying your payment…</p>
        )}
        {status === "success" && (
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4 text-green-600">✓</div>
            <h1 className="text-2xl font-bold text-green-700 mb-2">Payment successful</h1>
            <p className="text-gray-600 mb-6">
              Thank you. Order ID: <strong>{orderId}</strong>
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Back to home
            </Link>
          </div>
        )}
        {status === "failed" && (
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4 text-amber-600">!</div>
            <h1 className="text-2xl font-bold text-amber-700 mb-2">Payment incomplete</h1>
            <p className="text-gray-600 mb-6">
              Payment was not completed. Order ID: <strong>{orderId}</strong>
              {orderStatus && ` (Status: ${orderStatus})`}
            </p>
            <Link
              href="/checkout"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Try again
            </Link>
          </div>
        )}
        {status === "unknown" && (
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-gray-700 mb-2">Payment status</h1>
            <p className="text-gray-600 mb-6">
              {orderId
                ? `We could not verify order ${orderId}. Please contact support if amount was deducted.`
                : "No order ID found in the return URL."}
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Back to home
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function PaymentReturnPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-gray-600">Loading…</p>
        </div>
      }
    >
      <PaymentReturnContent />
    </Suspense>
  );
}
