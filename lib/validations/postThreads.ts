import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(1, { message: "Minimum of 3 characters" }),
  // acoountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(1, { message: "Minimum of 3 characters" }),
});
