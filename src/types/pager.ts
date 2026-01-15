import { z } from "zod";

const PagerSchema = z.object({
  pageNo: z.number(),
  totalPageCnt: z.number(),
});

type PagerType = z.infer<typeof PagerSchema>;

export type { PagerType }