// src/app/api/tickets/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs';

// Lida com GET /api/tickets (Buscar todos os tickets)
export async function GET() {
  try {
    const tickets = await query('SELECT * FROM tickets');
    if (!Array.isArray(tickets) || tickets.length === 0) {
        return NextResponse.json({ message: 'Nenhum ticket encontrado.' }, { status: 204 });
    }
    return NextResponse.json(tickets, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar tickets:', error);
    return NextResponse.json({ message: 'Falha ao buscar tickets.' }, { status: 500 });
  }
}

// Lida com POST /api/tickets (Criar um novo ticket)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventId, ticketType, price, currency, availableQuantity, description, startsSellingAt, endsSellingAt } = body;

    if (!eventId || !ticketType || price === undefined) {
      return NextResponse.json({ message: 'Dados obrigatórios do ticket (eventId, ticketType, price) ausentes.' }, { status: 400 });
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
    console.error('Erro ao criar ticket:', error);
    if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.errno === 1452) {
      return NextResponse.json({ message: 'ID do evento inválido. Evento não existe.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Falha ao criar ticket.' }, { status: 500 });
  }
}