import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetUser } from "@src/features/user";
import { useStore } from "@src/stores";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, isLoading, error } = useGetUser(id as string);
  const { loading } = useStore().config();

  loading.update(isLoading);

  if (error) return <div>에러 발생</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>email: {user?.email}</p>
      {/* ... */}
    </div>
  );
}
