import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../../../lib/db'; 

const uploadDirectory = path.join(process.cwd(), 'public', 'uploads');

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as Blob | null;
    const userId = formData.get('userId') as string | null;

    if (!file || !userId) {
      return NextResponse.json({ error: 'Arquivo ou ID do usuário não fornecido.' }, { status: 400 });
    }

    const fileName = `${uuidv4()}.png`;
    const filePath = path.join(uploadDirectory, fileName);

    await fs.mkdir(uploadDirectory, { recursive: true });

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, fileBuffer);

    const imageUrl = `/uploads/${fileName}`;
    await query(
      'UPDATE users SET profile_picture = ? WHERE id = ?',
      [imageUrl, userId]
    );

    return NextResponse.json({ profilePicture: imageUrl }, { status: 200 });
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error);
    return NextResponse.json({ error: 'Erro ao fazer upload da imagem.' }, { status: 500 });
  }
}
