export const userKeys = {
  all: ["user"] as const,

  list: ["user", "list"] as const,
  listWithFilter: (filter: string) => ["user", "list", filter] as const,

  detail: ["user", "detail"] as const,
  detailById: (id: string) => ["user", "detail", id] as const,
};
