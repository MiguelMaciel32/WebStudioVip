'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      toast({ title: 'Por favor, preencha todos os campos.' });
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('token', data.token); // Salva o token
        sessionStorage.setItem('email', email);
        const profilePicture = data.profilePicture || 'https://t3.ftcdn.net/jpg/03/81/30/16/360_F_381301638_mo8XtnvD4VtKWjNITYhwL3ITRxF4ldaO.jpg';
        sessionStorage.setItem('profilePicture', profilePicture);

        toast({ title: 'Bem-vindo de volta!' });
        window.location.reload();
        router.push('/profile');
      } else {
        toast({ title: data.error || 'Erro ao realizar login.' });
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      toast({ title: 'Erro ao realizar login.' });
    }
  };

  return (
    <main className="flex w-full h-screen overflow-y-hidden">
      <section className="flex flex-col w-1/2 gap-5 container p-16 justify-center grow md:w-full">
        <h1 className="font-bold flex justify-center text-3xl tracking-tighter leading-none text-center md:text-5xl">
          Conecte-se!
        </h1>
        <p className="text-muted-foreground leading-relaxed text-center">
          Comece a utilizar nossa plataforma com total liberdade após realizar o login em nossos serviços.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <section className="flex flex-col gap-2 justify-center mt-4">
          <Link href="/login/business">
            <Button variant="secondary" className="w-full">
              Entrar com uma conta empresarial
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="link" className="w-full text-center">
              Ou crie uma conta pessoal nova!
            </Button>
          </Link>
        </section>
      </section>
      <section className="bg-zinc-900 hidden justify-center items-center flex-col font-bold md:flex md:h-screen md:w-full">
        <h1 className="text-5xl text-white tracking-tighter">
          Bem-vindo
          <span className="link-color"> de volta</span>
        </h1>
        <Image
          className="h-80 w-80 mt-4"
          width={320}
          height={320}
          alt="Login"
          src="/undraw_access_account_re_8spm.svg"
        />
      </section>
    </main>
  );
}
