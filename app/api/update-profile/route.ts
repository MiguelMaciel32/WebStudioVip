
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function PUT(req: Request) {
    try {
        const { userId, about, contact } = await req.json();

        if (!userId || typeof about !== 'string' || typeof contact !== 'string') {
            return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
        }

        await query(
            'UPDATE users SET about = ?, contact = ? WHERE id = ?',
            [about, contact, userId]
        );

        return NextResponse.json({ message: 'Perfil atualizado com sucesso!' }, { status: 200 });
    } catch (error) {
        console.error('Erro ao atualizar perfil:', error);
        return NextResponse.json({ error: 'Erro ao atualizar perfil.' }, { status: 500 });
    }
}
