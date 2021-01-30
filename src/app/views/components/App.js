import { useEffect, useState } from "react";
import { 
  BrowserRouter as Router, 
  Route,
} from "react-router-dom";
import { list } from "../../data";
import '../../styles/App.css';
import { NavBar } from "../../components";
import { Home } from "./Home";
import { CartPage } from "./Cart";






const App = (props) => {

  const { items, onAddToCart, onUpdateToCart } = props;

  const [category, setCategory] = useState(0);
  // Permet de verifier si je suis entrain de filtrer ou pas
  const [isFiltring, setFiltring] = useState(false);
  const [filtred, setFiltred] = useState(false);

  const [count, setCount] = useState(1)

  const loadCategory = (i) =>{
    setCategory(i)
  }

  const filterResults = input =>{
    let fullList = list.flat();

    let results = fullList.filter(item => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1
    })
    setFiltred(results)
  }

  useEffect(() => {
    console.log(isFiltring);
  })

  const update = () => {
    console.log("update");
  }


  return (

    <>
  
      <Router>
  
        <NavBar filter={filterResults} setFiltring={setFiltring} count={count} />
        <Route exact path="/" component={() => <Home 
                                                  category={category}  
                                                  loadCategory={loadCategory}
                                                  updateToCart={update}
                                                  list={list} 
                                                  isFiltring={isFiltring} 
                                                  filtred={filtred}
                                                /> 
        }/>
        <Route path="/Cart" component={CartPage} />
            
      </Router>
    </>

  );
}
  
export default App;