import './globals.css'

export const metadata = {
  title: 'Gerador PDF',
  description: 'Gerador PDF com Next.js com Tailwind e Prisma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}