import { TInsuranceSchema } from "@/lib/types";

export const EmailTemplate: React.FC<Readonly<TInsuranceSchema>> = (data) => (
  <div>
    <h1>
      Pedido de seguro de: {data.email} ({data.phoneNumber})
    </h1>
    <h4>Hectareas: {data.hecate}</h4>
    <h4>Cobertura: {data.coverage}</h4>
    <h4>Comentarios: {data.comments}</h4>
    <h4>Razon social: {data.razonSocial}</h4>
    <h4>Cuit: {data.cuit}</h4>
    <h4>Cultivo: {data.cultivo}</h4>
    <h4>Fecha: {data.fecha}</h4>
    <h4>Superficie: {data.superficie}</h4>
    <h4>Moneda: {data.moneda}</h4>
    <h4>Valor por hectarea: {data.valorPorHectarea}</h4>
  </div>
);

export default EmailTemplate;
