import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

export default function BusinessCadastro() {
  return (
    <main className="flex w-full h-screen overflow-y-hidden">
      <section className="mt-4 relative">
        <Link href={"/login/business"} >
        <Button variant={"outline"} size={"icon"} className="rounded-lg fixed inset-x-2">
          <ArrowBigLeft />
        </Button>
        </Link>
      </section>
      <section className="flex flex-col w-1/2  gap-5 container p-16 justify-center grow md:w-full">
        <h1 className="font-bold flex justify-center text-3xl tracking-tighter leading-none text-center md:text-5xl">
          Crie sua conta empresarial!
        </h1>
        <p className="text-muted-foreground leading-relaxed text-center">
          Comece a utilizar nossa plataforma com total liberdade apos realizar o
          login em nossos serviços.
        </p>
        <form className="space-y-2">
          <Input placeholder="Nome da Empresa" />
          <Input placeholder="CNPJ" type="number" />
          <Input placeholder="Email" />
          <Input placeholder="Telefone" type="number" />
          <Input placeholder="Senha" type="password" />
        </form>
        <section className="flex flex-col gap-2 justify-center">
          <Button>Cadastrar nova conta empresarial!</Button>
          <Link href={"/login/business"}>
            <Button variant={"link"} className="w-full text-center">
              Ou entre em uma conta empresarial existente!
            </Button>
          </Link>
        </section>
      </section>
      <section className="bg-zinc-900 hidden justify-center items-center flex-col font-bold md:flex md:h-screen md:w-full">
        <h1 className="text-5xl text-white tracking-tighter text-center mx-4">
          Inicie sua jornada empresarial
          <span className="link-color"> conosco!</span>
        </h1>
        <Image
          className="h-80 w-80 mt-4"
          width={0}
          height={0}
          alt="Login "
          src={"/undraw_access_account_re_8spm.svg"}
        />
      </section>
    </main>
  );
}
