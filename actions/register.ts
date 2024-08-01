"use server";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas/index";
import * as z from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "error" };
  }

  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "email already exists" };
  }

  await db.user.create({
    data: { email, name, password: hashedPassword },
  });

  return { success: "email sent" };
};
