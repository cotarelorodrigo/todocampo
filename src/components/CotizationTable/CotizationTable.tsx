import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const cotizaciones = [
  {
    empresa: "AGD",
    grano: "Trigo",
    valor: 172,
    liquidacion: "contado",
  },
  {
    empresa: "AGD",
    grano: "Maiz",
    valor: 190,
    liquidacion: "contado",
  },
  {
    empresa: "AGD",
    grano: "Girasol",
    valor: 235,
    liquidacion: "contado",
  },
  {
    empresa: "AGD",
    grano: "Soja",
    valor: 260,
    liquidacion: "contado",
  },
];

function CotizationTable() {
  return (
    <Table className="bg-white rounded-md h-80">
      <TableHeader>
        <TableRow>
          <TableHead>Empresa</TableHead>
          <TableHead>Grano</TableHead>
          <TableHead>Cotizacion (usd/tn)</TableHead>
          <TableHead>Forma de liquidacion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cotizaciones.map((cotizacion) => (
          <TableRow key={cotizacion.empresa + cotizacion.grano}>
            <TableCell className="font-medium">{cotizacion.empresa}</TableCell>
            <TableCell>{cotizacion.grano}</TableCell>
            <TableCell>{cotizacion.valor}</TableCell>
            <TableCell>{cotizacion.liquidacion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CotizationTable;
