"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod"

type CreateMenuFormState = {
    errors: {
        name?: string[];
        description?: string[];
        category?: string[];
        price?: string[];
        image?: string[];
        formError?: string[];
    };
};

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    price: z.coerce.number().min(0.01, { message: "Price must be at least $0.01" }),
    image: z
        .string()
        .url({ message: "Image must be a valid URL" })
        .optional()
        .or(z.literal("")), // allow empty string
});

export const createMenuAction = async (initialState: CreateMenuFormState, formData: FormData): Promise<CreateMenuFormState> => {
    const result = formSchema.safeParse({
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        price: formData.get("price") as string,
        imageUrl: formData.get("image") as string
    });
    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }
    try {
        //save data inside database
        await prisma.menuItem.create({
            data: {
                name: result.data.name,
                description: result.data.description,
                category: result.data.category,
                price: result.data.price,
                imageUrl: result.data.image!
            }
        })
    } catch (error: unknown) {
        if(error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        } else {
            return {
                errors: {
                    formError: ["An Unexpected error occured"]
                }
            }
        }
    }
    revalidatePath("/admin/menu");
    redirect("/admin/menu");
}