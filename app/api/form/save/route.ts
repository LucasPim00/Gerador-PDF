import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { formularioSchema } from '../../../../lib/validation'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const json = await req.json()
    const body = formularioSchema.parse(json)

    const result = await prisma.formulario.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
        message: body.message,
        gender: body.gender,
        interests: (body.interests || []).join(','),
        city: body.city,
        age: Number(body.age),
        phone: body.phone,
        website: body.website,
        birth_date: body.birth_date,
        contact_time: body.contact_time,
        quantity: Number(body.quantity),
        favorite_color: body.favorite_color,
      },
    })

    console.log('[FORMULÁRIO SALVO]', result)

    return NextResponse.json({ status: 'ok', id: result.id })
  } catch (error) {
    console.error('[ERRO AO SALVAR FORMULÁRIO]', error)

    if (error instanceof Error && 'errors' in error) {
      return NextResponse.json(
        { status: 'validation_error', errors: (error as any).errors },
        { status: 400 }
      )
    }

    return NextResponse.json({ status: 'error', error }, { status: 500 })
  }
}