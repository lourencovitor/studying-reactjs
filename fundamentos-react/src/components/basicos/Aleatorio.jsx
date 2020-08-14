import React from "react";

export default (props) => {
  const { min, max } = props;
  const result = parseInt(Math.random() * (max - min + 1) + min);
  return (
    <div>
      <h2>Valor Aleatorio {result}</h2>
      <p>
        <strong>Valor Mínimo:</strong>
        {min}
      </p>
      <p>
        <strong>Valor Máximo:</strong>
        {max}
      </p>
    </div>
  );
};
