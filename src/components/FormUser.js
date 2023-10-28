import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function FormUser() {
  const ctx = useContext(UserContext);
  const { addUser } = ctx;

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Crea un Usuario</h1>

      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="first_name">Escribe el Nombre</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Escribe el Apellido</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Escribe tu Correo</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Crear Usuario
        </button>
      </form>
    </div>
  );
}
