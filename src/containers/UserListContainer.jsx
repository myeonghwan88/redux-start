import UserList from "../components/UserList";
import { useSelector } from "react-redux";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);

  return <UserList users={users} />;
}
