

import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db'; 

export async function POST(request: NextRequest) {
  const { nome, cpf, email, telefone, senha } = await request.json();

  
  if (!nome || !cpf || !email || !telefone || !senha) {
    return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
  }

  try {
   
    const result = await query(`
      INSERT INTO users (username, password, profile_picture, name, sobre, contato)
      VALUES (?, ?, NULL, ?, NULL, ?)
    `, [email, senha, nome, telefone]);

    return NextResponse.json({ success: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar usuário.' }, { status: 500 });
  }
}
