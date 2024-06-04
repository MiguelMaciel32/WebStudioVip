import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
export default function PaginaDeProdutos() {
  return (
    <>
      <main className="p-6 space-y-4">
        <section className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4  md:place-items-start max-w-xl">
          <section className="">
            <Image
              src={"/Empresa.jpg"}
              alt="Sobre a empresa"
              width={400}
              height={320}
              className="rounded-lg aspect-video object-cover flex"
            />
          </section>
          <section className="flex flex-col justify-start space-y-4 my-6 w-full">
            <h1 className="font-bold md:text-5xl tracking-tighter leading-none text-3xl">
              Sobre Nós
            </h1>
            <p className="w-full">
              Na [Nome da Empresa], celebramos a beleza única de cada pessoa.
              Oferecemos produtos e serviços de alta qualidade para realçar sua
              beleza natural. Nossa missão é inspirar confiança e bem-estar em
              cada cliente que atendemos.
            </p>
          </section>
        </section>

        <section className="mb-6">
          <h1 className="font-bold md:text-5xl tracking-tighter leading-none text-3xl">
            Endereço
          </h1>
          <section className="">
            <Card className="w-fit">
              <CardContent className="p-4">
                <p className="text-xl leading-relaxed w-full text-center">
                  Rua Joao Chapolin Colorado, N14, 00000-0000
                </p>
              </CardContent>
            </Card>
          </section>
        </section>

        <h1 className="font-bold md:text-5xl tracking-tighter leading-none text-3xl">
          Nossos Serviços
        </h1>
        <section className="w-full flex ">
          <Card className="w-fit">
            <CardContent className="p-4">
              <p className="text-xl leading-relaxed w-full text-center">
                Tratamentos Faciais Personalizados R$110.00 2HR
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Reservar</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
