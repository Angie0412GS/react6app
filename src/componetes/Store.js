import { createStore } from "redux";
import { reductorContador } from "./Reducer";

export const Store = createStore(reductorContador);
