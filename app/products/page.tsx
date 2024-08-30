'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StarsIcon } from "lucide-react";

async function fetchProducts() {
  try {
    const response = await fetch('/api/listagem-empresas');
    if (!response.ok) {
      throw new Error('Erro ao carregar produtos');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

export default function PaginaDeProdutos() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }
    loadProducts();
  }, []);

  return (
    <section className="px-6 py-4">
      <h1 className="font-bold w-full text-center mt-4 text-3xl tracking-tighter md:text-5xl md:text-start">
        Studio por perto
      </h1>
      <p className="text-muted-foreground leading-relaxed text-center md:text-xl md:text-start mt-2">
        Que tal marcar com um dos profissionais disponíveis em nossa plataforma?
      </p>
      <section className="grid grid-cols-1 place-items-center md:grid-cols-4 justify-center gap-24">
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} href={`/sobreempresa/${product.id}`}>
              <Card className="w-80 h-max mt-12 hover:transition-all">
                <CardHeader>
                  <Image
                    height={320}
                    width={200}
                    className="w-full object-cover aspect-square rounded-md"
                    alt={product.company_name || 'Imagem da empresa'}
                    src={product.logo || '/default-image.jpg'}
                  />
                </CardHeader>
                <CardContent className="flex space-y-4">
                  <section>
                    <h1 className="font-bold">{product.company_name || 'Nome da Empresa'}</h1>
                    <h1>{product.address || 'Endereço não disponível'}</h1>
                  </section>
                  <section className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                    <StarsIcon size={14} />
                    <p>5.0</p>
                  </section>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center">Nenhum produto encontrado.</p>
        )}
      </section>
    </section>
  );
}