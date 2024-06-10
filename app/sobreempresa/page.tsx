import AgendamentoTrigger from "@/components/AgendamentoTrigger";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Instagram, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Sobre() {
  return (
    <main className="flex flex-col justify-normal p-6 space-y-4">
      <header className="container grid grid-cols-1 md:grid-cols-2 place-items-center mb-24">
        <section className="flex justify-center mb-4 md:mb-0">
          <Image
            src={"/Empresa.jpg"}
            alt="Empresa"
            width={300}
            height={300}
            className="aspect-video object-cover rounded-lg min-w-fit max-w-2xl"
          />
        </section>
        <section className="space-y-4">
          <h1 className="font-bold tracking-tighter text-3xl md:text-5xl leading-tight">
            Sobre a empresa
          </h1>
          <p className="text-muted-foreground leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sunt, eveniet, maiores, porro exercitationem natus nemo expedita
            architecto adipisci voluptatibus soluta magnam optio cum molestias
            doloremque non nulla praesentium veniam?
          </p>
          <Link href={"/login"} className="flex w-full mt-4">
            <Button className="w-full">Reservar empresa</Button>
          </Link>
        </section>
      </header>
      <section className="space-y-4">
        <h2 className="font-bold tracking-tighter text-3xl md:text-4xl leading-tight text-start md:text-center mb-4">
          Serviços
        </h2>
        <section className="border p-2 px-4 rounded flex items-center gap-4">
          <section className="flex-1 items-center">
            <p>Sobrancelha</p>
          </section>
          <section>
            <p className="font-medium">R$15</p>
            <p className="text-muted-foreground">15min</p>
          </section>
          <AgendamentoTrigger>
            <Button variant={"secondary"}>Reservar</Button>
          </AgendamentoTrigger>
        </section>
        <section className="border p-2 px-4 rounded flex items-center gap-4">
          <section className="flex-1 items-center">
            <p>Corte de cabelo</p>
          </section>
          <section>
            <p className="font-medium">R$50</p>
            <p className="text-muted-foreground">30min</p>
          </section>
          <AgendamentoTrigger>
            <Button variant={"secondary"}>Reservar</Button>
          </AgendamentoTrigger>
        </section>
      </section>
      <section className="space-y-4">
        <h2 className="font-bold tracking-tighter text-3xl md:text-4xl leading-tight text-start md:text-center">
          Veja mais informaçoes sobre essa empresa
        </h2>
        <Card className="group hover:bg-primary transition-all">
          <CardHeader className="group-hover:text-primary-foreground">
            <CardTitle>Endereços</CardTitle>
          </CardHeader>
          <CardContent className="group-hover:text-primary-foreground">
            <p> Rua Joao Chapolin Colorado, N14, 00000-0000</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary transition-all">
          <CardHeader className="group-hover:text-primary-foreground">
            <CardTitle>Contatos</CardTitle>
            <CardDescription className="group-hover:text-primary-foreground">
              Contate-nos atraves de suas redes sociais mais utilizadas!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 group-hover:text-primary-foreground">
            <Button
              size={"icon"}
              variant={"outline"}
              className="dark:group-hover:text-white group-hover:text-zinc-900"
            >
              <Instagram />
            </Button>
            <Button
              size={"icon"}
              variant={"outline"}
              className="dark:group-hover:text-white group-hover:text-zinc-900"
            >
              <Phone />
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
