import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import { RowDataPacket } from 'mysql2';

// Definição da interface User
interface User extends RowDataPacket {
  id: number;
  username: string;
  password: string;
  profile_picture: string;
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Verificação básica dos campos
    if (!username || !password) {
      return NextResponse.json({ error: 'Usuário e senha são obrigatórios' }, { status: 400 });
    }

    console.log('Iniciando consulta SQL...');

    // Consulta SQL para verificar o usuário
    const result = await query('SELECT * FROM users WHERE username = ?', [username]);

    console.log('Resultado da consulta SQL:', result);

    // Verifique o tipo do resultado
    const rows: User[] = result[0] as User[];

    // Verifique se o usuário existe
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Obtenha o primeiro usuário do array
    const user = rows[0];

    // Verifique a senha
    if (user.password === password) {
      console.log('Senha correta, login bem-sucedido!');
      return NextResponse.json({
        message: 'Login bem-sucedido',
        profilePicture: user.profile_picture
      });
    } else {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
    }
  } catch (error) {
    console.error('Erro no servidor:', error); // Log do erro
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
