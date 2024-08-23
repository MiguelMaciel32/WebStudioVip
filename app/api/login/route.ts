// app/api/login/route.ts

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '723616Ll#',
    database: 'studiovip'
});

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email e senha são obrigatórios.' }, { status: 400 });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [email]);
    const users = rows as Array<{ id: number, username: string, password: string, profile_picture: string }>;

    if (users.length === 0) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
    }

    const user = users[0];

    if (user.password !== password) {
      return NextResponse.json({ message: 'Senha incorreta.' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login bem-sucedido!', profilePicture: user.profile_picture });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
