import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';


interface User {
  id: number;
  username: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    

    const [rows] = await query<User>('SELECT * FROM users WHERE username = ?', [username]);

 
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    const user = rows[0];
    if (user.password === password) {
      return NextResponse.json({ message: 'Login bem-sucedido' });
    } else {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
    }
  } catch (error) {

    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
