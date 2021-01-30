import  React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// 1 - Recuperer les actions
import {addToCart} from '../lib/actions'


export const NavBar = ({ filter, setFiltring }) => {
    // Avoir acces au state l'objet pour mettre a jour le panier
    const items = useSelector(state => state.items)

    return ( 
        <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand  crimson" to="/"> <i className="fas fa-shopping-cart"></i> Mes Course en Ligne </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ml-auto cart">
                    <div>
                        <form className="search form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={(e) => {
                                    setFiltring(e.target.value.length > 0)
                                    filter(e.target.value)
                                }}
                            />
                        </form>
                    </div>
                    <div className="menu-right">
                        <Link to="/cart"><i class="fas fa-shopping-bag fa-2x grey"></i></Link>
                        <span class="badge badge-success">{items.length > 0 && items.length}</span>

                    </div>
                </div>
            </div>
        </nav>
     );
};

export const Footer = () => {
    return(
        <footer>
            <div className="container">
                <span className="text-muted">Place sticky footer content here</span>
            </div>
        </footer>
    );
};

export const Card = props => {
    const { item } = props;
    
    return (
        <div className="col-sm-4">
            <div className="card">
                <img 
                    width="170"
                    height="170"
                    src={process.env.PUBLIC_URL + `assets/${item.categoray}/${item.image}`}
                    alt={item.name}
                />
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>{item.name}</h4>
                        </div>
                        <div className="col-sm-6">
                            <p>
                                €{item.price}/{item.unit}
                            </p>
                            <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${item.ref}`}>view product</button>
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${item.ref}`}>view product</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <Modal item={item} />
        </div>
    );
};

export const Modal = ( { item } ) => {

    const [qty, setQty] = useState(1);

    // 2 Declaration de la variable dispach pou pouvoir dispatcher localement une action via le store
    const dispatch = useDispatch()

    const add = (item, quantity) => {
        dispatch(addToCart(quantity, item))
    }

    return (
        <div 
            className="modal fade" 
            id={item.ref} 
            tabindex="-1" 
            role="dialog" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{item.name}</h5>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div classeName="col-sm-4">
                            <img
                                width="170"
                                height="170"
                                src={process.env.PUBLIC_URL + `/assets/${item.categoray}/${item.image}`}
                                // src={process.env.PUBLIC_URL + `/assets/0/citron.jpg`}
                                alt={item.title}
                            />
                        </div>
                        <div className="col-sm">
                            <p className="lead">
                                lorem ipsum de la population de c lorem ipsum delorem ipsum de
                            </p>
                            <h3 className="price">€{item.price}</h3>
                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic-example"
                            >
                                <button
                                    onClick={() => {
                                        setQty(qty > 1 ? qty - 1 : 1)
                                    }}
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    -
                                </button>
                                <span className="btn btn-light qty">{qty}</span>
                                <button
                                onClick={() => {
                                    setQty(qty + 1)
                                }}
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    +
                                </button>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={() => add(item, qty)}
                    >
                    Add to cart</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export const List = props => {
    const { data, addToCart, updateCart } = props;

    return (
        <div className="col-sm">
            <div className="row">
                {data.map(item => <Card key={item.ref} item={item} addToCart={addToCart} updateCart={updateCart} />)}
            </div>
        </div>
    );
};