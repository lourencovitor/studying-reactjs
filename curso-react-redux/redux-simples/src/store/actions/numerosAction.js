import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "./acionTypes";

// Action Creator
export const alterarNumeroMinimo = (novoNumero) => {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero,
  };
};

export const alterarNumeroMaximo = (novoNumero) => {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero,
  };
};
