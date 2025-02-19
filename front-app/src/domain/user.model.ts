import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  age: z.number().int().min(0),
});

export type User = z.infer<typeof userSchema>;
