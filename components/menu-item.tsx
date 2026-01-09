"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { Item } from "@/app/menu/page";
import {Image} from "@imagekit/next";
import { useStore } from "@/store/store";

export function MenuItem({ item }: { item: Item }) {
  const addToCart = useStore((store) => store.addToCart);
  console.log(item.image);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0 pb-4">
          <Image
           urlEndpoint="https://ik.imagekit.io/rx2p4gidt"
            src={item.imageUrl}
            width={400}
            height={400}
            alt="Picture of the author"
            className="w-full h-48 object-cover"
          />
        
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">${item.price.toFixed(2)}</span>
        <Button
          onClick={() => addToCart(item)}
          size="sm"
          className="gap-1 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}