"use client";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  FormDescription,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TInsuranceSchema, insuranceSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import sendEmail from "@/app/seguros/action";
import { useToast } from "@/components/ui/use-toast";

function InsuranceForm() {
  const { toast } = useToast();
  const form = useForm<TInsuranceSchema>({
    resolver: zodResolver(insuranceSchema),
    defaultValues: {
      hecate: undefined,
      coverage: "",
      email: "",
      phoneNumber: "",
      razonSocial: "",
      cuit: "",
      cultivo: "",
      fecha: "",
      superficie: undefined,
      moneda: "",
      valorPorHectarea: undefined,
    },
  });

  const onSubmit = async (values: TInsuranceSchema) => {
    const formData = new FormData();
    formData.append("hecate", String(values.hecate));
    formData.append("coverage", values.coverage);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("comments", values.comments ?? "");
    formData.append("razonSocial", values.razonSocial);
    formData.append("cuit", values.cuit);
    formData.append("cultivo", values.cultivo);
    formData.append("fecha", values.fecha);
    formData.append("superficie", String(values.superficie));
    formData.append("moneda", values.moneda);
    formData.append("valorPorHectarea", String(values.valorPorHectarea));
    await sendEmail(formData).then((response) => {
      if (response?.message) {
        toast({
          variant: "destructive",
          title: "Uh oh!",
          description: response.message,
        });
      } else {
        toast({
          title: "Informacion enviada!",
          description: "Nos contactaremos a la brevedad",
        });
        form.reset();
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="cultivo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Cultivo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hecate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number" placeholder="Hectáreas" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="moneda"
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Moneda" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="qq">qq</SelectItem>
                  <SelectItem value="usd">usd</SelectItem>
                  <SelectItem value="pesos">$</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        <FormField
          control={form.control}
          name="valorPorHectarea"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Valor por Hectárea"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="superficie"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Superficie" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coverage"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Cobertura</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="cobertura_1"
                        checked={field.value === "cobertura_1"}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Cobertura clasica (granizo + incendio + resiembre)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="cobertura_2"
                        checked={field.value === "cobertura_2"}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Cobertura clasica + adicional de heladas
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="cobertura_3"
                        checked={field.value === "cobertura_3"}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Cobertura clasica + otros adicional (especificar en
                      comentarios)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Telefono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentarios</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Suma cualquier informacion que extra aqui"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="razonSocial"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Razón Social" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cuit"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="CUIT" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fecha"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="date" placeholder="Fecha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-6  bg-cane-500 hover:bg-cane-600">
          Quiero mas informacion!
        </Button>
      </form>
    </Form>
  );
}

export default InsuranceForm;
