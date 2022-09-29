import logo from './logo.svg';
import './App.css';
import LightBox from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <LightBox/>
      <ItemListContainer light="Listado de productos"/>
    </div>
  );
}

export default App;
