import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs';

interface Context {
  params: { id: string };
}

export async function GET(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de seção inválido.' }, { status: 400 });
    }
    const sql = 'SELECT * FROM sections WHERE id = ?';
    const [section]: any[] = await query(sql, [id]);

    if (!section) {
      return NextResponse.json({ message: 'Seção não encontrada.' }, { status: 404 });
    }
    return NextResponse.json(section, { status: 200 });
  } catch (error) {
    console.error(`Erro ao buscar seção com ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao buscar seção.' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de seção inválido.' }, { status: 400 });
    }

    const body = await request.json();
    const { eventId, sectionName, title, subtitle, description, backgroundImageUrl, callToActionText, callToActionLink, displayOrder } = body;

    const sql = `
      UPDATE sections
      SET event_id = ?, section_name = ?, title = ?, subtitle = ?, description = ?, background_image_url = ?, call_to_action_text = ?, call_to_action_link = ?, display_order = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    const params = [eventId, sectionName, title, subtitle, description, backgroundImageUrl, callToActionText, callToActionLink, displayOrder, id];
    const result: any = await query(sql, params);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Seção não encontrada para atualização.' }, { status: 404 });
    }
    const [updatedSection]: any[] = await query('SELECT * FROM sections WHERE id = ?', [id]);
    return NextResponse.json(updatedSection, { status: 200 });
  } catch (error: any) {
    console.error(`Erro ao atualizar seção com ID ${context.params.id}:`, error);
    if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.errno === 1452) {
      return NextResponse.json({ message: 'ID do evento inválido. Evento não existe.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Falha ao atualizar seção.' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de seção inválido.' }, { status: 400 });
    }
    const sql = 'DELETE FROM sections WHERE id = ?';
    const result: any = await query(sql, [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Seção não encontrada para exclusão.' }, { status: 404 });
    }
    return NextResponse.json(null, { status: 204 });
  } catch (error: any) {
    console.error(`Erro ao deletar seção com ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao deletar seção.' }, { status: 500 });
  }
}