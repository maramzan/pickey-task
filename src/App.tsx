import { Provider } from "react-redux";
import store from "./store";
import Products from "./pages/products";

function App() {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}

export default App;
