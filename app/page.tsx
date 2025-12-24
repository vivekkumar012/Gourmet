import { Navbar } from "@/components/Header/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[80vh] ">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </section>
      </main>
    </div>
  );
}
