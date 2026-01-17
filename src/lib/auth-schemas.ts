import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

export const RegisterSchema = z.object({
    fullname: z.string().min(2, 'O nome é obrigatório.'),
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

export const ForgotPasswordSchema = z.object({
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
});
