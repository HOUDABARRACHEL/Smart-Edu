"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../input.jsx";
import { axiosClient } from "../../../api/axios.js";

const formSchema = z.object({
  username: z.string().email().min(2).max(50),
  password: z.string().min(8),
});

function StudentLogin() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
      username:"xxxxxxx@gmail.com",
      password:"*****************" 
    }
  });

function onSubmit(values) {
  const axios = axiosClient;
  console.log(values,axios);
}

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username or Email </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Username or Email" {...field} />
                </FormControl>
                <FormDescription>
                  *your public display name.
                </FormDescription>
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
                  <Input type="enter your password" placeholder="Your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
}

export default StudentLogin;
