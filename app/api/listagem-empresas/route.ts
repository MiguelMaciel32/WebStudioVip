// app/api/listagem-empresas/route.ts
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function GET() {
  try {
    // Seleciona todas as empresas da tabela 'users'
    const results = await query(
      'SELECT id, company_name, address, logo FROM users WHERE company_name IS NOT NULL'
    );

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('Erro ao listar empresas:', error);
    return NextResponse.json({ error: 'Erro ao listar empresas.' }, { status: 500 });
  }
}