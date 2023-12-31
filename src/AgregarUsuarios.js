import React, { useState } from "react";
import uniquid from "uniqid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AgregarUsuario() {
  //hooks

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const navigate = useNavigate();

  function agregarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniquid(),
    };

    console.log(usuario);

    axios
      .post(
        "https://proyectomernstack-server.vercel.app/api/usuario/agregarusuario",
        usuario
      )
      .then((res) => {
        // alert(res.data);
        navigate("/");
      })
      .then((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4 text-center">Crear un nuevo usuario</h2>
      </div>

      <div className="row">
        <div className=" col-sm-6 offset-1">
          <div className=" mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className=" form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <button onClick={agregarUsuario} className="btn btn-success">
            Guardar usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
