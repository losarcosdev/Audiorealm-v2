"use client";
import { Button } from "@/components";
import { useToast } from "@/components/use-toast";
import { IOrder } from "@/interfaces";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type OrderResponseBody = {
  id: string;
  status:
    | "CREATED"
    | "COMPLETED"
    | "SAVED"
    | "APPROVED"
    | "VOIDED"
    | "PAYER_ACTION_REQUIRED";
};

interface Props {
  order: IOrder;
}

export const PayPalActions = ({ order }: Props) => {
  const router = useRouter();
  const [loadingPayment, setLoadingPayment] = useState<boolean>(false);
  const { toast } = useToast();

  const onOrderCompleted = async (details: OrderResponseBody) => {
    if (details.status !== "COMPLETED") {
      return toast({
        title: "Payment Error",
        description: "No payment in paypal",
      });
    }

    setLoadingPayment(true);

    try {
      const transactionId = details.id;
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/orders/pay`,
        {
          transactionId,
          orderId: order._id,
        }
      );

      toast({
        title: "Payment",
        description: "Payment successful",
      });
      router.refresh();
    } catch (error) {
      console.log({ error });
      toast({
        title: "Payment Error",
        description: "Something went wrong - try again",
        variant: "destructive",
      });
    } finally {
      setLoadingPayment(false);
    }
  };

  return (
    <>
      {loadingPayment ? (
        <Button className="w-full" isLoading={loadingPayment}>
          Paying...
        </Button>
      ) : (
        <PayPalButtons
          style={{ color: "silver", label: "checkout" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: order.total.toString(),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order!.capture().then((details) => {
              onOrderCompleted(details);
            });
          }}
        />
      )}
    </>
  );
};
