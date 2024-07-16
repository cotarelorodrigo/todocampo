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
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TInsuranceSchema, insuranceSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

function InsuranceForm() {
  const router = useRouter();
  const form = useForm<TInsuranceSchema>({
    resolver: zodResolver(insuranceSchema),
    defaultValues: {
      coverage: "cobertura_1",
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: TInsuranceSchema) => {
    console.log("Values:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      <RadioGroupItem value="cobertura_1" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Cobertura clasica (granizo + incendio + resiembre)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="cobertura_2" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Cobertura clasica + adicional de heladas
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="cobertura_3" />
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
        <Button
          className="w-full mt-6  bg-cane-500 hover:bg-cane-600"
          type="submit"
        >
          Quiero mas informacion!
        </Button>
      </form>
    </Form>
  );
}

export default InsuranceForm;
