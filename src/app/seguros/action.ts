"use server";
import { Resend } from "resend";
import { insuranceSchema } from "@/lib/types";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const validatedFields = insuranceSchema.safeParse(
    Object.fromEntries(formData)
  );

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: "El formulario esta incompleto",
    };
  }

  const { data, error } = await resend.emails.send({
    from: "Granos Directos <onboarding@resend.dev>",
    to: ["granosdirectos@gmail.com"],
    subject: "Formulario de Seguros",
    react: EmailTemplate(validatedFields.data) as React.ReactElement,
  });

  if (error) {
    //TO DO: report error from resend
    return {
      message:
        "Estamos experimentado un error. Contactate con nosotros en granosdirectos@gmail.com",
    };
  }

  return;
}
