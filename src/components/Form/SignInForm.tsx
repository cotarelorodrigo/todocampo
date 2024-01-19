"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
//import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
//import { EyeFilledIcon } from "./EyeFilledIcon";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, TSignInSchema } from "@/lib/types";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (data: TSignInSchema) => {
    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log("Error:", signInData.error);
    } else {
      console.log("login OK");
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );

  /*
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="space-y-2">
        <Input
          {...register("email")}
          label="Email"
          placeholder="Enter your email"
          isInvalid={!!errors.email}
          errorMessage={!!errors.email && "Please enter a valid email"}
          variant="flat"
          color="primary"
        />
        <Input
          {...register("password")}
          label="Password"
          variant="flat"
          color="primary"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
          isInvalid={!!errors.password}
          errorMessage={!!errors.password && "Please enter a valid password"}
        />
        <Button type="submit" color="primary" className="w-full">
          Ingresar
        </Button>
      </div>
    </form>
  );
  */
}
