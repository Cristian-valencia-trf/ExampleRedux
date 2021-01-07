import * as React from "react";
import "./styles.css";
import Boton from "./components/boton/Boton";
import Field from "./components/field/Field";
import ProviderListData from "./components/listdata/Provider.ListData";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Field border="10" margin="10" padding="10"></Field>
        <Boton
          color="white"
          onClick={() => console.log("click en agregar")}
          backgroundColor="green"
        >
          Agregar
        </Boton>

        <Boton
          color="white."
          onClick={() => console.log("Click en eliminar")}
          backgroundColor="red"
        >
          Eliminar
        </Boton>
        <ProviderListData />
      </div>
    </Provider>
  );
}
