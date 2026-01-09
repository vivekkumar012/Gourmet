"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useStore } from "@/store/store";

interface Props {}

const CartSummary = (props: Props) => {
  const cartItem = useStore((store) => store.cart);
  const subTotal = cartItem.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
 const tax = subTotal * 0.08 // 8 % tax laga rhe hai
 const total = subTotal + tax;
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span>${tax}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
      <Button className="w-full">Proceed To CheckOut</Button>
    </div>
  );
};

export default CartSummary;
