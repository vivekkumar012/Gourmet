"use client"

import { CartItem as Item, useStore } from "@/store/store";
import {Image} from "@imagekit/next";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";
import { Input } from "./ui/input";

interface Props {}

const CartItem = ({ item }: { item: Item }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity } = useStore(
    (store) => store
  );
  return (
    <div className="flex items-stretch gap-4 border rounded-lg p-4">
      <div className="relative w-24 h-24">
        <Image
          urlEndpoint="https://ik.imagekit.io/rx2p4gidt"
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-muted-foreground text-sm">{item.price}</p>
          </div>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => decreaseQuantity(item.id)}
            variant={"outline"}
            size={"icon"}
            className="h-8 w-8"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            className="w-12 text-center h-8"
            min={1}
            readOnly
          />
          <Button
            onClick={() => increaseQuantity(item.id)}
            variant={"outline"}
            size={"icon"}
            className="h-8 w-8"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
