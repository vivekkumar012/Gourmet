"use server"
import {z} from "zod"

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

export const createMenuAction = async (initialState: CreateMenuFormState, formData: FormData) => {
    const result = formSchema.safeParse({
        name: formData.get("name") as string,
        description: formData.get("description")
    })
}