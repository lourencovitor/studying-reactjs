import { createStore, combineReducers } from "redux";
import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
  numeros: numerosReducer /*
   Puxado dos reducers os stados na nossa aplicação nesse caso só temos os numeros
   Os numeros poderiam ser comparados com o state = { } ou useState() dentro dos componentes
   */,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
