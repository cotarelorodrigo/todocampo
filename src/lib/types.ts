import * as z from "zod";

export const signInSchema = z.object({
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    name: z.string().min(3, "Name is required").max(30),
    lastname: z.string().min(1, "Lastname is required").max(30),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
    confirmPassword: z.string(),
    profile: z.enum(["transportista", "vendedor"]),
    phoneNumber: z.string().min(10).max(14),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
