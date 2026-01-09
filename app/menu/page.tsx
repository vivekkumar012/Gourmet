import MenuList from "@/components/menu-list";
import { Suspense } from "react";


export default function MenuPage() {
    return (
        <div className="container mx-auto p-8">
            <div className="gap-8 mb-8">
                <h1 className="text-3xl font-bold">Our Menu</h1>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <MenuList />
            </Suspense>
        </div>
    )
}