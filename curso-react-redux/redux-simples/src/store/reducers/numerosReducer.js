import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "../actions/acionTypes";

const initialState = {
  min: 1,
  max: 10,
};

/* 
    O reducer numerosReducer onde você declara todo a logica de qual campo vair ser alterado (switch)
    e é retornado da action um type e um payload o payload é o valor novo que será alterado o campo
    type
*/
const numerosReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUM_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload,
      };
    case NUM_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
};

export default numerosReducer;
