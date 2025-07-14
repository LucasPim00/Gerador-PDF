import { z } from 'zod'

export const formularioSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(3),
  message: z.string().optional(),
  gender: z.string().optional(),
  interests: z.array(z.string()).optional(),
  city: z.string().optional(),
  age: z.string().refine((v) => !isNaN(Number(v)), {
    message: 'Idade inválida',
  }),
  phone: z.string().optional(),
  website: z.string().url().optional(),
  birth_date: z.string().optional(),
  contact_time: z.string().optional(),
  quantity: z.string().refine((v) => !isNaN(Number(v)), {
    message: 'Quantidade inválida',
  }),
  favorite_color: z.string().optional(),
})