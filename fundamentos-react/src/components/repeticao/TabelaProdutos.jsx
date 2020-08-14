import React from "react";
import produtos from "../../data/alunos";
import "./TabelaProdutos.css";

export default (props) => {
  const produtosLI = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.nota.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{produtosLI}</tbody>
      </table>
    </div>
  );
};
