import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const forms = await prisma.formulario.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ status: 'ok', data: forms })
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Erro ao buscar dados.' },
      { status: 500 }
    )
  }
}