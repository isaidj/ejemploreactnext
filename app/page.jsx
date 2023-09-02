"use client";
import Contador from "@/componentes/Contador";
import Input from "@/componentes/Input";
import { useState } from "react";

const HomePage = () => {
  var name = "John Doe";
  const [nombre, setNombre] = useState("John Doe");

  const cambiarNombre = () => {
    name = "Victor";
    setNombre("Victor");
  };

  return (
    <div className="container">
      <h1 style={{ color: "red" }}>Home Page</h1>
      <button
        onClick={cambiarNombre}
        className="bg-indigo-800 text-white p-2 rounded shadow border-2 border-indigo-900"
      >
        Cambiar nombre
      </button>
      <h1>ESTE ES EL NOMBRE CON VARIABLES: {name}</h1>
      <h1>ESTE ES EL NOMBRE CON ESTADO: {nombre}</h1>
      ----------------------------
      <Contador />
    </div>
  );
};
export default HomePage;
