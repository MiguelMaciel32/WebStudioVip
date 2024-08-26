// app/api/profile/route.ts
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import jwt from 'jsonwebtoken';

interface User {
  id: number;
  username: string;
  profile_picture: string;
  name: string;
}

const JWT_SECRET = 'luismiguel';

export async function GET(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json({ error: 'Token não encontrado' }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
      
      const result = await query<User>('SELECT * FROM users WHERE id = ?', [decoded.id]);

      if (result.length === 0) {
        return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
      }

      const user = result[0];
      return NextResponse.json(user);
    } catch (error) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro no servidor:', error.message);
      return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    } else {
      console.error('Erro desconhecido no servidor');
      return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    }
  }
}
