import React from "react";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./redux/store";
import Dashboard from "./components/Dashboard";
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} >
            <Dashboard id={'root'}/>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
