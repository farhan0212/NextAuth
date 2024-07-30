"use server";
import { LoginSchema } from "@/schemas/index";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "error" };
  }
  return { success: "email sent" };
};
