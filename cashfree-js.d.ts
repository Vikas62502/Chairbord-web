declare module "@cashfreepayments/cashfree-js" {
  export function load(params: {
    mode: "sandbox" | "production";
  }): Promise<{
    checkout(options: {
      paymentSessionId: string;
      redirectTarget?: "_self" | "_blank" | "_top" | "_modal";
    }): Promise<unknown>;
  } | null>;
}
