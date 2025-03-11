import { z } from "zod";

export const parseZodErrors = (error: unknown) => {
  if (error instanceof z.ZodError) {
    return error.issues.reduce<Record<string, string>>((acc, issue) => {
      const fieldName = `${issue.path[0]}`;

      acc[fieldName] = issue.message;

      return acc;
    }, {});
  }

  return {};
};
