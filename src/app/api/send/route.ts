import { Resend } from "resend";
import { insuranceSchema, TInsuranceSchema } from "@/lib/types";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formData: TInsuranceSchema = insuranceSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "Granos Directos <onboarding@resend.dev>",
      to: ["granosdirectos@gmail.com"],
      subject: "Formulario de Seguros",
      react: EmailTemplate(formData) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
