import { z } from "zod";

export const createAccountSchema = z.object({
    name: z.string({
      required_error: "Nome é obrigatório"
    }).min(3,{
      message: 'Nome deve ter pelo menos 3 caracteres'
    }),
    email: z
      .string({
        required_error: "Email é obrigatório",
      })
      .email({
        message: "Email é inválido",
      }),
    password: z
      .string({
        required_error: "Senha é obrigatória",
      })
      .min(6, {
        message: "É obrigatório no minímo de 6 caracteres",
      }),
      confirmPassword: z.string({
        required_error: 'Confirmar a senha é obrigatória'
      })
  }).refine((data)=> data.password ===  data.confirmPassword, {
    message: 'A confirmação de senha não é igual a senha',
    path: ["confirmPassword"]
  });

  export type CreateAccountSchema = z.infer<typeof createAccountSchema>;