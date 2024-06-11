"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "@/components/ui/use-toast";

export default function Login() {
  const [cpf, setCpf] = useState<string>("");

  /**
   * Função para validar CPF
   * @param {string} cpf
   * @returns {boolean}
   */
  const validarCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/[^\d]+/g, ""); /* tirar letras e caracterrias especiais */
    if (cpf.length !== 11) return false; /* quantidade numero digitado para verificar caso passe vira false*/

    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  /**
   * Essa função retorna uma mensagem (toast) como se fosse uma autenticação do usuário
   * @param {FormEvent} e
   */
  const cadastrarUsuario = (e: FormEvent) => {
    // Prevenir recarregamento da página
    e.preventDefault();

    // Validação do CPF
    if (!validarCPF(cpf)) {
      toast({
        description: "CPF inválido!",
      });
      return;
    }

    toast({
      description: "Conta criada com sucesso!",
    });
  };

  return (
    <main className="flex w-full h-screen overflow-y-hidden">
      <section className="flex flex-col gap-5 container p-16 justify-center">
        <h1 className="font-bold flex justify-center text-3xl tracking-tighter leading-none text-center md:text-5xl">
          Cadastre-se!
        </h1>
        <p className="text-muted-foreground leading-relaxed text-center">
          Comece a utilizar nossa plataforma com total liberdade após realizar o
          cadastro em nossos serviços.
        </p>
        <form className="space-y-2" onSubmit={cadastrarUsuario}>
          <Input placeholder="Nome" />
          <Input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <Input placeholder="Email" />
          <Input placeholder="Telefone" type="text" />
          <Input placeholder="Senha" />
          <Button className="gap-2 justify-center mx-44" type="submit">
            <Sparkles size={16} />
            Criar minha conta!
          </Button>
        </form>
        <section className="flex flex-col gap-2 justify-center">
          <Link href={"/login"} className="flex">
            <Button variant={"link"} className="flex justify-center w-full">
              Ou entre em uma conta existente!
            </Button>
          </Link>
        </section>
      </section>
      <section className="bg-zinc-900 hidden justify-center items-center flex-col font-bold md:flex md:h-screen md:w-full">
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
      </section>
    </main>
  );
}
