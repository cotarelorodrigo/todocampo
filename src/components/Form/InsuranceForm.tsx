"use client";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TInsuranceSchema, insuranceSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { useRouter } from "next/navigation";

function InsuranceForm() {
  const router = useRouter();
  const form = useForm<TInsuranceSchema>({
    resolver: zodResolver(insuranceSchema),
    defaultValues: {
      hecate: 10,
      coverage: "",

      phoneNumber: "",
    },
  });

  const onSubmit = async (values: TInsuranceSchema) => {
    console.log("Values:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="hecate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Hecatareas" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coverage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Cobertura" {...field} />
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
        <Button className="w-full mt-6 hover:bg-cane-500" type="submit">
          Quiero mas informacion!
        </Button>
      </form>
    </Form>
  );
}

export default InsuranceForm;
