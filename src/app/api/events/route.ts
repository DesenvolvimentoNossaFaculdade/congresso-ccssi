import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const runtime = 'nodejs';


export async function GET() {
  try {
    const sql = 'SELECT * FROM events ORDER BY event_date DESC';
    const events = await query(sql);

    if (!Array.isArray(events) || events.length === 0) {
      return NextResponse.json({ message: 'Nenhum evento encontrado.' }, { status: 204 });
    }
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    return NextResponse.json({ message: 'Falha ao buscar eventos.' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, siteTitle, eventDate, location, description } = body;

    if (!eventName || !siteTitle || !eventDate) {
      return NextResponse.json({ message: 'Nome do evento, título do site e data são obrigatórios.' }, { status: 400 });
    }

    const sql = `
      INSERT INTO events (event_name, site_title, event_date, location, description)
      VALUES (?, ?, ?, ?, ?)
    `;
    const params = [eventName, siteTitle, eventDate, location, description];
    const result: any = await query(sql, params);

    const [newEvent]: any = await query('SELECT * FROM events WHERE id = ?', [result.insertId]);

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    return NextResponse.json({ message: 'Falha ao criar evento.' }, { status: 500 });
  }
}