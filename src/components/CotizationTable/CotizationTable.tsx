import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function CotizationTable({
  title,
  cotizaciones,
}: {
  title: string;
  cotizaciones: { name: string; price: string }[];
}) {
  return (
    <Table className="bg-white rounded-md h-80 shadow-md border-2">
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Grano</TableHead>
          <TableHead>Cotizacion ($/Tn )</TableHead>
          <TableHead>Forma de liquidacion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cotizaciones.map((cotizacion) => (
          <TableRow key={cotizacion.name}>
            <TableCell>{cotizacion.name.toUpperCase()}</TableCell>
            <TableCell>{cotizacion.price}</TableCell>
            <TableCell>Pago Contado</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CotizationTable;
