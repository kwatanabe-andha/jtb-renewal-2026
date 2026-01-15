import { z } from "zod";

const APIErrorsSchema = z.object({
  message: z.string(),
  field: z.string().optional()
});

type APIErrorsType = z.infer<typeof APIErrorsSchema>;

export type { APIErrorsType }