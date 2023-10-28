import React, { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

export default function ListUsers(params) {
  const ctx = useContext(UserContext);
  const { users, readUsers } = ctx;

  useEffect(() => {
    const getResponse = async () => {
      await readUsers();
    };
    getResponse();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Listado de Usuarios</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e) => (
            <tr key={e.id}>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
