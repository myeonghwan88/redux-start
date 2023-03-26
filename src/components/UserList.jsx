import { useEffect } from "react";

export default function UserList({ users }) {
  useEffect(() => {}, []);

  if (users.length === 0) {
    return <p>현재 유저 정보 없음</p>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li>{JSON.stringify(user)}</li>
      ))}
    </ul>
  );
}
