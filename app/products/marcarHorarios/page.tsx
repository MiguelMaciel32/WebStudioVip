import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MarcarHorario() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <section className="mt-4 relative w-fit">
        <Link href={"/products"}>
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-lg fixed inset-x-2"
          >
            <ArrowBigLeft />
          </Button>
        </Link>
      </section>
      <section className="flex flex-col p-6 justify-center items-center w-full h-screen">
        <form className="space-y-4">
          <h1>Title</h1>
          <p>Description</p>
          <Input type="date" />
          <Input type="number" placeholder="" />
          <Input type="text" />
          <Button>Agendar!</Button>
        </form>
      </section>
    </main>
  );
}
