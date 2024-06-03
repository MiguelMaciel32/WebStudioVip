"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "@/components/ui/use-toast";

type User = {
  email: string;
  phone: string;
  password: string;
};

export default function Login() {
  const [user, setUser] = useState<User | null>(null);

  /**
   * Essa funçao retorna uma mensagem (toast) como se fosese uma autenticacao do usurio
   * @param e
   */
  const cadastrarUsuario = (e: FormEvent) => {
    // prevenir recarregamento da pagina
    e.preventDefault();

    toast({
      title: "Conta criada com sucesso!",
    });
  };

  return (
    <main className="flex w-full h-screen overflow-y-hidden">
      <div className="flex flex-col gap-5 container p-16 justify-center">
        <h1 className="font-bold flex justify-center text-5xl tracking-tighter leading-none">
          Cadastre-se!
        </h1>
        <p className="text-muted-foreground leading-relaxed text-center">
          Comece a utilizar nossa plataforma com total liberdade apos realizar o
          cadastro em nossos serviços.
        </p>
        <form className="space-y-2" onSubmit={(e) => cadastrarUsuario(e)}>
          <Input placeholder="Email" />
          <Input placeholder="Telefone" type="text" />
          <Input placeholder="Senha" />
        </form>
        <div className="flex flex-col gap-2 justify-center">
          <Button className="gap-2" type="submit" onClick={cadastrarUsuario}>
            <Sparkles size={16} />
            Criar minha conta!
          </Button>
          <Link href={"/login"} className="flex">
            <Button variant={"link"} className="flex justify-center w-full">
              Ou entre em uma conta existente!!
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-zinc-900 hidden justify-center items-center flex-col font-bold md:flex md:h-screen md:w-full">
        <h1 className="text-5xl text-white text-center">
          Prepare-se
          <span className="text-violet-300"> pra uma nova jornada</span>
        </h1>

        <Image
          className="h-80 w-80"
          width={0}
          height={0}
          alt="Login "
          src={"/undraw_logic_re_nyb4.svg"}
        />
      </div>
    </main>
  );
}
