import { NextResponse } from 'next/server'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export async function POST(req: Request) {
  const data = await req.json()
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595, 842]) // tamanho A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const { width, height } = page.getSize()

  const drawText = (label: string, value: string, y: number) => {
    page.drawText(`${label}: ${value}`, {
      x: 50,
      y,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    })
  }

  let y = height - 50

  drawText('Nome', data.name, y -= 20)
  drawText('Email', data.email, y -= 20)
  drawText('Senha', data.password, y -= 20)
  drawText('Mensagem', data.message, y -= 40)
  drawText('Gênero', data.gender, y -= 20)
  drawText('Interesses', (data.interests || []).join(', '), y -= 20)
  drawText('Cidade', data.city, y -= 20)
  drawText('Idade', data.age, y -= 20)
  drawText('Telefone', data.phone, y -= 20)
  drawText('Website', data.website, y -= 20)
  drawText('Data de nascimento', data.birth_date, y -= 20)
  drawText('Horário preferido de contato', data.contact_time, y -= 20)
  drawText('Quantidade desejada', data.quantity, y -= 20)
  drawText('Cor favorita', data.favorite_color, y -= 20)

  const pdfBytes = await pdfDoc.save()

  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=formulario.pdf',
    },
  })
}