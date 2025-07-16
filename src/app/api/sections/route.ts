// src/app/api/sections/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs';

// Lida com GET /api/sections (Buscar todas as seções)
export async function GET() {
  try {
    const sections = await query('SELECT * FROM sections ORDER BY display_order ASC');
    if (!Array.isArray(sections) || sections.length === 0) {
        return NextResponse.json({ message: 'Nenhuma seção encontrada.' }, { status: 204 });
    }
    return NextResponse.json(sections, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar seções:', error);
    return NextResponse.json({ message: 'Falha ao buscar seções.' }, { status: 500 });
  }
}

// Lida com POST /api/sections (Criar uma nova seção)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventId, sectionName, title, subtitle, description, backgroundImageUrl, callToActionText, callToActionLink, displayOrder } = body;

    if (!eventId || !sectionName || displayOrder === undefined) {
      return NextResponse.json({ message: 'Dados obrigatórios da seção (eventId, sectionName, displayOrder) ausentes.' }, { status: 400 });
    }

    const sql = `
      INSERT INTO sections (event_id, section_name, title, subtitle, description, background_image_url, call_to_action_text, call_to_action_link, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [eventId, sectionName, title, subtitle, description, backgroundImageUrl, callToActionText, callToActionLink, displayOrder];
    const result: any = await query(sql, params);

    const [newSection]: any = await query('SELECT * FROM sections WHERE id = ?', [result.insertId]);
    return NextResponse.json(newSection, { status: 201 });
  } catch (error: any) {
    console.error('Erro ao criar seção:', error);
    // Erro de foreign key constraint (se eventId não existir)
    if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.errno === 1452) {
      return NextResponse.json({ message: 'ID do evento inválido. Evento não existe.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Falha ao criar seção.' }, { status: 500 });
  }
}