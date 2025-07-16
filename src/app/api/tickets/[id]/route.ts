// src/app/api/tickets/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs';

interface Context {
  params: { id: string };
}

// Lida com GET /api/tickets/:id (Buscar ticket por ID)
export async function GET(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de ticket inválido.' }, { status: 400 });
    }
    const sql = 'SELECT * FROM tickets WHERE id = ?';
    const [ticket]: any[] = await query(sql, [id]);

    if (!ticket) {
      return NextResponse.json({ message: 'Ticket não encontrado.' }, { status: 404 });
    }
    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    console.error(`Erro ao buscar ticket com ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao buscar ticket.' }, { status: 500 });
  }
}

// Lida com PUT /api/tickets/:id (Atualizar ticket por ID)
export async function PUT(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de ticket inválido.' }, { status: 400 });
    }

    const body = await request.json();
    const { eventId, ticketType, price, currency, availableQuantity, description, startsSellingAt, endsSellingAt } = body;

    const sql = `
      UPDATE tickets
      SET event_id = ?, ticket_type = ?, price = ?, currency = ?, available_quantity = ?, description = ?, starts_selling_at = ?, ends_selling_at = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    const params = [eventId, ticketType, price, currency, availableQuantity, description, startsSellingAt, endsSellingAt, id];
    const result: any = await query(sql, params);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Ticket não encontrado para atualização.' }, { status: 404 });
    }
    const [updatedTicket]: any[] = await query('SELECT * FROM tickets WHERE id = ?', [id]);
    return NextResponse.json(updatedTicket, { status: 200 });
  } catch (error: any) {
    console.error(`Erro ao atualizar ticket com ID ${context.params.id}:`, error);
    if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.errno === 1452) {
      return NextResponse.json({ message: 'ID do evento inválido. Evento não existe.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Falha ao atualizar ticket.' }, { status: 500 });
  }
}

// Lida com DELETE /api/tickets/:id (Deletar ticket por ID)
export async function DELETE(request: NextRequest, context: Context) {
  try {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID de ticket inválido.' }, { status: 400 });
    }
    const sql = 'DELETE FROM tickets WHERE id = ?';
    const result: any = await query(sql, [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Ticket não encontrado para exclusão.' }, { status: 404 });
    }
    return NextResponse.json(null, { status: 204 });
  } catch (error: any) {
    console.error(`Erro ao deletar ticket com ID ${context.params.id}:`, error);
    return NextResponse.json({ message: 'Falha ao deletar ticket.' }, { status: 500 });
  }
}