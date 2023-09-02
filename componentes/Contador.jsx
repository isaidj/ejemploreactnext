import React, { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  function sumar() {
    setNumero(numero + 1);
  }
  function restar() {
    setNumero(numero - 1);
  }
  return (
    <div>
      <h1>Contador</h1>
      <h1 className="text-4xl text-cyan-600">{numero}</h1>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={sumar}
        className="bg-indigo-800 text-white p-2 rounded shadow border-2 border-indigo-900"
      >
        Sumar
      </button>
      <button
        style={{ backgroundColor: "blue", color: "white", marginLeft: "10px" }}
        onClick={restar}
        className="bg-indigo-800 text-white p-2 rounded shadow border-2 border-indigo-900"
      >
        Restar
      </button>
    </div>
  );
};

export default Contador;
