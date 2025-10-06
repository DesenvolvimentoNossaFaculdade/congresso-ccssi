import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = [
  'http://localhost:3000',
  'https://www.congressocariri.com.br' 
];

export async function GET(req: NextRequest) {
  const origin = req.headers.get('origin') || '';

  if (!allowedOrigins.includes(origin)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  const fbRes = await fetch('https://connect.facebook.net/en_US/fbevents.js');

  if (!fbRes.ok) {
    return new NextResponse('Failed to fetch Facebook Pixel', { status: 502 });
  }

  const text = await fbRes.text();

  return new NextResponse(text, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

export function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin') || '';

  if (!allowedOrigins.includes(origin)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
