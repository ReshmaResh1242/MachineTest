import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";

// ----------------- imports -------------------------
import StacKNavigation from './src/Navigations/StackNavigations'
import { baseReducer } from "./src/Redux/Reducer";

const Store = createStore(baseReducer);

const App = () => {

  return (
    <Provider store={Store}>
      <StacKNavigation />
    </Provider>
  );
};

export default App;