import * as z from "zod";

export const signInSchema = z.object({
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
