import { Form } from "../../components/pages/users/Form";
import { UsersTable } from "../../components/pages/users/Table";
import { useUsers } from "../../hooks/useUsers";

export default function UsersPage() {
<<<<<<< HEAD
  const { user, users, deleteUser,  handleSubmit, handleUser} = useUsers();
  return (
    <>
      <h1>Página de usuários</h1>
      <Form handleSubmit={handleSubmit} handleUser={handleUser} user={user}/>
      <UsersTable deleteUser={deleteUser} users={users}/>
     
=======
  const { user, users, deleteUser, handleSubmit, handleUser } = useUsers();

  return (
    <>
      <h1>Página de usuários</h1>
      <Form handleSubmit={handleSubmit} handleUser={handleUser} user={user} />
      <UsersTable deleteUser={deleteUser} users={users} />
>>>>>>> 2c42617e3df7e6d9af6ad1d17ff2c7c94255ac6d
    </>
  );
}
