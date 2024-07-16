import { TInsuranceSchema } from "@/lib/types";

export const EmailTemplate: React.FC<Readonly<TInsuranceSchema>> = (data) => (
  <div>
    <h1>
      Pedido de seguro de: {data.email} ({data.phoneNumber})
    </h1>
    <h4>Hectareas: {data.hecate}</h4>
    <h4>Cobertura: {data.coverage}</h4>
    <h4>Comentarios: {data.comments}</h4>
  </div>
);

export default EmailTemplate;
