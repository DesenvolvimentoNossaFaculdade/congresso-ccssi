// src/app/api/events/[id]/sections/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs';

interface Context {
  params: { id: string };
}

// Lida com GET /api/events/:id/sections (Buscar seções por ID do evento)
export async function GET(request: NextRequest, context: Context) {
  try {
    const eventId = parseInt(context.params.id);
    if (isNaN(eventId)) {
      return NextResponse.json({ message: 'ID de evento inválido.' }, { status: 400 });
    }

    const sql = 'SELECT * FROM sections WHERE event_id = ? ORDER BY display_order ASC';
    const sections = await query(sql, [eventId]);

    if (!Array.isArray(sections) || sections.length === 0) {
      return NextResponse.json({ message: 'Nenhuma seção encontrada para este evento.' }, { status: 204 });
    }
    return NextResponse.json(sections, { status: 200 });
  } catch (error) {
    console.error(`Erro ao buscar seções para evento ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao buscar seções.' }, { status: 500 });
  }
}

// Lida com POST /api/events/:id/sections (Criar uma nova seção para este evento)
export async function POST(request: NextRequest, context: Context) {
  try {
    const eventId = parseInt(context.params.id);
    if (isNaN(eventId)) {
      return NextResponse.json({ message: 'ID de evento inválido.' }, { status: 400 });
    }

    const body = await request.json();
    const { sectionName, title, subtitle, description, backgroundImageUrl, callToActionText, callToActionLink, displayOrder } = body;

    if (!sectionName || displayOrder === undefined) {
      return NextResponse.json({ message: 'Nome da seção e ordem de exibição são obrigatórios.' }, { status: 400 });
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
    console.error(`Erro ao criar seção para evento ID ${context.params.id}:`, error);
    if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.errno === 1452) {
      return NextResponse.json({ message: 'ID do evento inválido. Evento não existe.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Falha ao criar seção.' }, { status: 500 });
  }
}