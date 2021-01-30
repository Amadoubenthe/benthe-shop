import { List, NavBar } from "../../components";
// import SideMenu from './App';
// import { list } from '../data';


const SideMenu = ({ loadCategory, category } )=> {

    const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"];
  
    return (
      <div className="col-md-2 sidebar">
        <ul>
          {links.map((link, index) => {
            return (<li className={category === index && 'active'} key={index} onClick={() => loadCategory(index)}>{link}</li>)
          })}
        </ul>
      </div>
    );
  };

export const Home = props => {
    const { isFiltring, loadCategory, filtred, list, category, addToCart, updateCart } = props
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <SideMenu loadCategory={loadCategory} category={category} />
                    <div className="col-sm">
                        <div className="row">
                            <List data={isFiltring ? filtred : list[category]} category={category} addToCart={addToCart} updateCart={updateCart} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

