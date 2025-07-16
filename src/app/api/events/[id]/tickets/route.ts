// src/app/api/events/[id]/tickets/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs';

interface Context {
  params: { id: string };
}

// Lida com GET /api/events/:id/tickets (Buscar tickets por ID do evento)
export async function GET(request: NextRequest, context: Context) {
  try {
    const eventId = parseInt(context.params.id);
    if (isNaN(eventId)) {
      return NextResponse.json({ message: 'ID de evento inválido.' }, { status: 400 });
    }

    const sql = 'SELECT * FROM tickets WHERE event_id = ?';
    const tickets = await query(sql, [eventId]);

    if (!Array.isArray(tickets) || tickets.length === 0) {
      return NextResponse.json({ message: 'Nenhum ticket encontrado para este evento.' }, { status: 204 });
    }
    return NextResponse.json(tickets, { status: 200 });
  } catch (error) {
    console.error(`Erro ao buscar tickets para evento ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao buscar tickets.' }, { status: 500 });
  }
}

// Lida com POST /api/events/:id/tickets (Criar um novo ticket para este evento)
export async function POST(request: NextRequest, context: Context) {
  try {
    const eventId = parseInt(context.params.id);
    if (isNaN(eventId)) {
      return NextResponse.json({ message: 'ID de evento inválido.' }, { status: 400 });
    }

    const body = await request.json();
    const { ticketType, price, currency, availableQuantity, description, startsSellingAt, endsSellingAt } = body;

    if (!ticketType || price === undefined) {
      return NextResponse.json({ message: 'Tipo de ticket e preço são obrigatórios.' }, { status: 400 });
    }

    const sql = `
      INSERT INTO tickets (event_id, ticket_type, price, currency, available_quantity, description, starts_selling_at, ends_selling_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [eventId, ticketType, price, currency, availableQuantity, description, startsSellingAt, endsSellingAt];
    const result: any = await query(sql, params);

    const [newTicket]: any = await query('SELECT * FROM tickets WHERE id = ?', [result.insertId]);
    return NextResponse.json(newTicket, { status: 201 });
  } catch (error: any) {
    console.error(`Erro ao criar ticket para evento ID ${context.params.id}:`, error);
    if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.errno === 1452) {
      return NextResponse.json({ message: 'ID do evento inválido. Evento não existe.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Falha ao criar ticket.' }, { status: 500 });
  }
}