"use client";
import { createMenuAction } from "@/actions/create-menu";
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
import React, { useActionState, useState } from "react";

interface Props {}

const categories = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];

const Page = (props: Props) => {
  const [formState, action, isPending] = useActionState(createMenuAction, {
    errors: {},
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

  const handleAction = (formData: FormData) => {
    if (imageUrl) {
      formData.set("imageUrl", imageUrl);
    }
    if (category) {
      formData.set("category", category);
    }
    return action(formData);
  };

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
          <form action={handleAction}>
            {/* Display general form errors */}
            {formState.errors.formError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
                <p className="text-red-600 text-sm">{formState.errors.formError}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label>Item Name</Label>
              <Input name="name" placeholder="e.g. Margherita Pizza" />
              {formState.errors.name && (
                <p className="text-red-500 text-sm">{formState.errors.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                name="description"
                placeholder="Brief description of the item"
              />
              {formState.errors.description && (
                <p className="text-red-500 text-sm">
                  {formState.errors.description}
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Price</Label>
                <Input 
                  name="price" 
                  type="number" 
                  step="0.01"
                  placeholder="0.00" 
                />
                {formState.errors.price && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.price}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select name="category" value={category} onValueChange={setCategory}>
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
                {formState.errors.category && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.category}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <UploadExample setImageUrl={setImageUrl} />
              {formState.errors.imageUrl && (
                <p className="text-red-500 text-sm">
                  {formState.errors.imageUrl}
                </p>
              )}
            </div>
            
            <Button disabled={isPending} type="submit" className="w-full mt-4">
              {isPending ? "Loading..." : "Add Menu Item"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;