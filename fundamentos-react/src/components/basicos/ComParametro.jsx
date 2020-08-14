import React from "react";

export default function ComParametro(props) {
  const { titulo, aluno, nota } = props;
  const status = nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong> {aluno} </strong>
        tem nota
        <strong> {notaInt} </strong> e está
        <strong> {status} !</strong>
      </p>
    </div>
  );
}
