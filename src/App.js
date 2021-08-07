import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Posts from './components/Posts';
import DetallePost from './components/DetallePost'
import CrearCategoria from "./components/CrearCategoria"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path ="/" component={Nav}></Route>
          <Route exact path ="/" component={Home}></Route>
          <Route exact path ="/posts" component={Posts}></Route>
          <Route exact path ="/posts/:id" component={DetallePost}></Route>
          <Route exact path="/crear/categoria" component={CrearCategoria}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

