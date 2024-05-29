import { Provider } from "react-redux";
import store from "./store";
import Products from "./pages/products";
import Navbar from "./components/navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Products />
    </Provider>
  );
}

export default App;
