//import { NextResponse } from 'next/server'
//import { PrismaClient } from '@prisma/client'
//
//const prisma = new PrismaClient()
//
//export async function GET() {
//  try {
//    const forms = await prisma.formulario.findMany({
//      orderBy: { createdAt: 'desc' },
//    })
//
//    console.log(`[LISTAGEM] ${forms.length} formulários encontrados.`)
//
//    return NextResponse.json({ status: 'ok', data: forms })
//  } catch (error) {
//    console.error('[ERRO NA LISTAGEM]', error)
//    return NextResponse.json({ status: 'error', error }, { status: 500 })
//  }
//}