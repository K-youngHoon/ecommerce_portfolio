import React from "react";
import { useRouter } from "next/router";
import { useUser } from "@src/application/user.adapter";
import { useUserStore } from "@src/stores/user.store";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, isLoading, error } = useUser(id as string);
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);

  React.useEffect(() => {
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
