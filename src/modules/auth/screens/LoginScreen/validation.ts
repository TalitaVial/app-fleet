import { z } from "zod";

export const loginSchema = z.object({
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
  });
  
 export type LoginSchema = z.infer<typeof loginSchema>;