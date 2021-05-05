import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from "./functionalComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Inventory Management</h1>
        <AddProduct />
      </header>
    </div>
  );
}

export default App;
