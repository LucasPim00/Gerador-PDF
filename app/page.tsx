'use client'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    message: '',
    gender: '',
    interests: [] as string[],
    city: '',
    age: '',
    phone: '',
    website: '',
    birth_date: '',
    contact_time: '',
    quantity: '',
    favorite_color: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement
    const { name, value, type } = target

    if (type === 'checkbox') {
      const interests = form.interests.includes(value)
        ? form.interests.filter((i) => i !== value)
        : [...form.interests, value]
      setForm({ ...form, interests })
    } else if (type === 'radio') {
      setForm({ ...form, [name]: value })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const gerarPDF = async () => {
    const res = await fetch('/api/pdf/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'formulario.pdf'
    link.click()
  }

  const importarPDF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = async () => {
        const res = await fetch('/api/pdf/import', {
          method: 'POST',
          body: reader.result,
        })
        const data = await res.json()
        alert('Conteúdo do PDF:\n' + data.texto)
      }
      reader.readAsArrayBuffer(file)
    }
  }

  return (
  <main className="min-h-screen bg-gray-400 flex items-center justify-center p-6">
    <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-4xl p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Formulário Completo</h1>

      <form className="grid gap-4">
        <h2 className="text-lg font-semibold">Informações Pessoais</h2>

        <input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" required />
        <input type="password" name="password" placeholder="Senha" value={form.password} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" required />
        <textarea name="message" placeholder="Mensagem" value={form.message} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" rows={4} />

        <h2 className="text-lg font-semibold mt-4">Preferências</h2>
        <div className="flex gap-4">
          <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Masculino</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Feminino</label>
          <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Outro</label>
        </div>

        <div className="flex gap-4 flex-wrap">
          <label><input type="checkbox" name="interests" value="Music" onChange={handleChange} /> Música</label>
          <label><input type="checkbox" name="interests" value="Sports" onChange={handleChange} /> Esportes</label>
          <label><input type="checkbox" name="interests" value="Travel" onChange={handleChange} /> Viagens</label>
        </div>

        <select name="city" value={form.city} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white">
          <option value="">Selecione a cidade</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Belo Horizonte">Belo Horizonte</option>
          <option value="Curitiba">Curitiba</option>
        </select>

        <h2 className="text-lg font-semibold mt-4">Informações Adicionais</h2>
        <input type="number" name="age" placeholder="Idade" min={18} max={99} value={form.age} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />
        <input type="tel" name="phone" placeholder="11-91234-5678" value={form.phone} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />
        <input type="url" name="website" placeholder="https://..." value={form.website} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />
        <input type="date" name="birth_date" value={form.birth_date} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />
        <input type="time" name="contact_time" value={form.contact_time} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />
        <input type="number" name="quantity" min={1} max={10} placeholder="Quantidade de Cópias" value={form.quantity} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />
        <input type="color" name="favorite_color" value={form.favorite_color} onChange={handleChange} className="p-2 border border-gray-600 rounded bg-gray-700 text-white w-16 h-10" />

        <h2 className="text-lg font-semibold mt-4">Baixar arquivos ou fotos</h2>
        <input type="file" name="file" accept=".pdf,.docx" className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />
        <input type="file" name="photos" accept="image/*" multiple className="p-2 border border-gray-600 rounded bg-gray-700 text-white" />

        <div className="flex gap-4 mt-6">
          <button type="button" onClick={gerarPDF} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Gerar PDF</button>
          <label className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded cursor-pointer">
            Importar PDF
            <input type="file" accept="application/pdf" onChange={importarPDF} className="hidden" />
          </label>
          <button type="reset" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Limpar</button>
        </div>
      </form>
    </div>
  </main>
)
}