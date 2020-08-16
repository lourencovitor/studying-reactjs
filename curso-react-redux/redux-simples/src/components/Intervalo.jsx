import React from "react";
import { connect } from "react-redux";
import "./Intervalo.css";
import Card from "./Card";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numerosAction";

const Intervalo = (props) => {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarmaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alterarMinimo(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarmaximo(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps, // função para mapiar os estados da aplicação
  mapDispatchToProps
)(Intervalo);
