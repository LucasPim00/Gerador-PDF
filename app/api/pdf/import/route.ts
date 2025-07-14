import { NextRequest, NextResponse } from 'next/server'
import pdfParse from 'pdf-parse'

export async function POST(req: NextRequest) {
  const buffer = await req.arrayBuffer()
  const data = await pdfParse(Buffer.from(buffer))
  return NextResponse.json({ texto: data.text })
}