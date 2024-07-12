import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CotizacionLine } from "@/components/CotizacionLine";
import * as cheerio from "cheerio";

async function getPrices() {
  const res = await fetch("https://www.cac.bcr.com.ar/es/precios-de-pizarra", {
    next: { revalidate: 86400 },
  });
  const data = await res.text();

  const $ = cheerio.load(data);

  const trigo_price = $("div.board-trigo").find(".price").text().trim();
  const maiz_price = $("div.board-maiz").find(".price").text().trim();
  const girasol_price = $("div.board-girasol").find(".price").text().trim();
  const soja_price = $("div.board-soja").find(".price").text().trim();
  const sorgo_price = $("div.board-sorgo").find(".price").text().trim();

  if (!trigo_price || !maiz_price || !girasol_price) {
    // TO DO: log error to inform that data fetching is failing
    return null;
  }

  const fecha = $("div.board-prices").find("h3").first().text();

  return {
    cotizaciones: [
      { name: "trigo", price: trigo_price },
      { name: "maiz", price: maiz_price },
      { name: "girasol", price: girasol_price },
      { name: "soja", price: soja_price },
      { name: "sorgo", price: sorgo_price },
    ],
    fecha: fecha,
  };
}

async function CotizationTable() {
  const prices = await getPrices();

  if (!prices) return <CotizacionLine />;

  return (
    <Table className="bg-white rounded-md h-80 shadow-md border-2">
      <TableCaption>{prices.fecha}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Grano</TableHead>
          <TableHead>Cotizacion ($/Tn )</TableHead>
          <TableHead>Forma de liquidacion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prices.cotizaciones.map((cotizacion) => (
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
