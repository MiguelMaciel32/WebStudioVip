import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import path from 'path';
import { promises as fs } from 'fs';

const uploadDirectory = path.join(process.cwd(), 'public', 'empresa');

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('logo') as File | null;
    const companyName = formData.get('companyName') as string | null;
    const contactInfo = formData.get('contactInfo') as string | null;
    const address = formData.get('address') as string | null;
    const username = formData.get('username') as string | null;
// na api nem existe id

    // Verifica se todos os campos obrigatórios estão presentes
    if (!file || !companyName || !contactInfo || !address || !username ) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    // Salva o logo no diretório público
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDirectory, fileName);
    await fs.mkdir(uploadDirectory, { recursive: true });
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, fileBuffer);
    const logoUrl = `/empresa/${fileName}`;

    // Insere a empresa no banco de dados
    const [result] = await query(
      'INSERT INTO users (username, password, company_name, contact_info, address, logo) VALUES (?, ?, ?, ?, ?, ?)',
      [username,  companyName, contactInfo, address, logoUrl]
    );

    const insertId = result.insertId;

    return NextResponse.json({ success: true, companyId: insertId }, { status: 200 });
  } catch (error) {
    console.error('Erro ao cadastrar empresa:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar empresa.' }, { status: 500 });
  }
}

// irmão estou perdido kakskks o  problema ta na api pelo visto