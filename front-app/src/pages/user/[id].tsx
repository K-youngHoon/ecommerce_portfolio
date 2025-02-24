import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetUser } from "@src/features/user";
import { useStore } from "@src/stores";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, isLoading, error } = useGetUser(id as string);
  const { setCurrentUser } = useStore().user.getState();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user, setCurrentUser]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Age: {user?.age}</p>
      {/* ... */}
    </div>
  );
}
