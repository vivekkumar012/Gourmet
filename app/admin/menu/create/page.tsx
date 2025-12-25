import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import UploadExample from "@/components/upload-image";
import Link from "next/link";
import React from "react";

interface Props {}

const categories = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];

const page = (props: Props) => {
    const isPending = true;
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <Card className="w-full max-w-xl ">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1>Add New Menu Items</h1>
            <Link href={"/admin/menu"}>
              <Button variant={"link"}>All Menu Lists</Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-2">
              <Label>Item Name</Label>
              <Input name="name" placeholder="e.g. Margherita Pizza" />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                name="name"
                placeholder="Brief description of the item"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Price</Label>
                <Input name="price" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select name="category">
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
                <UploadExample />
            </div>
            <Button disabled={isPending} type="submit" className="w-full mt-4">
                {
                    isPending ? "Loading..." : "Add Menu Item"
                }
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
