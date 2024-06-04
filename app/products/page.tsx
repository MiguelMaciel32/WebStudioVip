"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StarsIcon } from "lucide-react";
import AgendamentoTriggger from "@/components/AgendamentoTrigger";
export default function PaginaDeProdutos() {
  return (
    <>
      <section className="px-6 py-4">
        <h1 className="font-bold w-full text-center mt-4 text-3xl tracking-tighter md:text-5xl md:text-start">
          Estudio por perto
        </h1>
        <p className="text-muted-foreground leading-relaxed text-center md:text-xl md:text-start mt-2">
          Que tal marcar com uma dos profissionais disponiveis em nossa
          plataforma.
        </p>
        <section className="grid grid-cols-1 place-items-center md:grid-cols-4 justify-center gap-6">
          <AgendamentoTriggger>
            <Card className="w-80 h-max  mt-12 hover:size-11/12 hover:transition-all">
              <CardHeader>
                <Image
                  height={320}
                  width={200}
                  className="w-full object-cover aspect-square rounded-md"
                  alt="Tatuagem tato servicos agendamentos"
                  src={"/tatto.jpg"}
                />
              </CardHeader>
              <CardContent className="flex space-y-4">
                <div>
                  <h1 className="font-bold">Dhan - tatto</h1>
                  <h1>Jardim Belval - Barueri</h1>
                </div>
                <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                  <StarsIcon size={14} />
                  <p>5.0</p>
                </div>
              </CardContent>
            </Card>
          </AgendamentoTriggger>

          <Card className="w-80 h-max  mt-12 hover:size-11/12 hover:transition-all">
            <CardHeader>
              <Image
                height={320}
                width={200}
                className="w-full object-cover aspect-square rounded-md"
                alt="Tatuagem tato servicos agendamentos"
                src={"/tatto2.jpg"}
              />
            </CardHeader>
            <CardContent className="flex space-y-4">
              <div>
                <h1 className="font-bold">Alex - Cabeleleiro</h1>
                <h1>LeoPoldina - Osasco</h1>
                <Button className="mt-5">Marcar</Button>
              </div>
              <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                <StarsIcon size={14} />
                <p>5.0</p>
              </div>
            </CardContent>
          </Card>
      
          <Card className="w-80 h-max  mt-12 hover:size-11/12 hover:transition-all">
            <CardHeader>
              <Image
                height={320}
                width={200}
                className="w-full object-cover aspect-square rounded-md"
                alt="Tatuagem tato servicos agendamentos"
                src={"/spa210.jpg"}
              />
            </CardHeader>
            <CardContent className="flex space-y-4">
              <div>
                <h1 className="font-bold ">Helena - Spa</h1>
                <h1>Jandira</h1>
              </div>
              <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                <StarsIcon size={14} />
                <p>5.0</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 place-items-center md:grid-cols-4 justify-center gap-2">
          <Card className="w-80 h-max  mt-12 hover:size-11/12 hover:transition-all">
            <CardHeader>
              <Image
                height={320}
                width={200}
                className="w-full object-cover aspect-square rounded-md"
                alt="Tatuagem tato servicos agendamentos"
                src={"/tatto.jpg"}
              />
            </CardHeader>
            <CardContent className="flex space-y-4">
              <div>
                <h1 className="font-bold">Dhan - tatto</h1>
                <h1>Jardim Belval - Barueri</h1>
                <Button className="mt-5">Marcar</Button>
              </div>
              <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                <StarsIcon size={14} />
                <p>5.0</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-80 h-max  mt-12 hover:size-11/12 hover:transition-all">
            <CardHeader>
              <Image
                height={320}
                width={200}
                className="w-full object-cover aspect-square rounded-md"
                alt="Tatuagem tato servicos agendamentos"
                src={"/tatto.jpg"}
              />
            </CardHeader>
            <CardContent className="flex space-y-4">
              <div>
                <h1 className="font-bold">Dhan - tatto</h1>
                <h1>Jardim Belval - Barueri</h1>
                <Button className="mt-5">Marcar</Button>
              </div>
              <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                <StarsIcon size={14} />
                <p>5.0</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-80 h-max  mt-12 hover:size-11/12 hover:transition-all">
            <CardHeader>
              <Image
                height={320}
                width={200}
                className="w-full object-cover aspect-square rounded-md"
                alt="Tatuagem tato servicos agendamentos"
                src={"/tatto.jpg"}
              />
            </CardHeader>
            <CardContent className="flex space-y-4">
              <div>
                <h1 className="font-bold">Dhan - tatto</h1>
                <h1>Jardim Belval - Barueri</h1>
                <Button className="mt-5">Marcar</Button>
              </div>
              <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                <StarsIcon size={14} />
                <p>5.0</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </>
  );
}
