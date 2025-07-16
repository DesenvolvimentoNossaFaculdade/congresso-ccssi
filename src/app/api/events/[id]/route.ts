// src/app/api/events/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs'; // Garante ambiente Node.js

interface Context {
  params: { id: string };
}

// Lida com GET /api/events/:id (Buscar evento por ID)
export async function GET(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de evento inválido.' }, { status: 400 });
    }

    const sql = 'SELECT * FROM events WHERE id = ?';
    const [event]: any[] = await query(sql, [id]); // Pega o primeiro item do array

    if (!event) {
      return NextResponse.json({ message: 'Evento não encontrado.' }, { status: 404 });
    }
    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    console.error(`Erro ao buscar evento com ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao buscar evento.' }, { status: 500 });
  }
}

// Lida com PUT /api/events/:id (Atualizar evento por ID)
export async function PUT(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de evento inválido.' }, { status: 400 });
    }

    const body = await request.json();
    const { eventName, siteTitle, eventDate, location, description } = body;

    const sql = `
      UPDATE events
      SET event_name = ?, site_title = ?, event_date = ?, location = ?, description = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    const params = [eventName, siteTitle, eventDate, location, description, id];
    const result: any = await query(sql, params);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Evento não encontrado para atualização.' }, { status: 404 });
    }
    const [updatedEvent]: any[] = await query('SELECT * FROM events WHERE id = ?', [id]);
    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (error: any) {
    console.error(`Erro ao atualizar evento com ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao atualizar evento.' }, { status: 500 });
  }
}

// Lida com DELETE /api/events/:id (Deletar evento por ID)
export async function DELETE(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de evento inválido.' }, { status: 400 });
    }

    const sql = 'DELETE FROM events WHERE id = ?';
    const result: any = await query(sql, [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Evento não encontrado para exclusão.' }, { status: 404 });
    }
    return NextResponse.json(null, { status: 204 }); // No Content
  } catch (error: any) {
    console.error(`Erro ao deletar evento com ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao deletar evento.' }, { status: 500 });
  }
}