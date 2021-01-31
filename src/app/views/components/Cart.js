import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateCart, removeFromCart } from '../../lib/actions'

const Row = ( props ) => {

    const { quantity, details, id } = props.item;

    const [qty, setQty] = useState(details)

    const item = quantity
    console.log(item);


    // Dispatcher les actions qui vont passer via le store

    const dispatch = useDispatch();

    const update = (action) => {
        if(action === 'increment') { setQty(qty + 1) }
        if(action === 'decrement') { setQty(qty - 1) }
        // dispatch(updateCart(item , qty))
        
        // debugger;
    }

    const remove = id => {
        dispatch(removeFromCart(id))
    }
    useEffect(() => {
        // dispatch(updateCart(id, qty))
        dispatch(updateCart(item , qty))
    }, [qty])

    return (
        <tr>
            <td>
                <img
                    width="70"
                    height="70"
                    src={process.env.PUBLIC_URL + `/assets/${quantity.categoray}/${quantity.image}`}

                    // src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
                    alt={quantity.name}
                    // alt="citron.png"
                />
            </td>
            <td>ref{quantity.ref}</td>
            <td>€{quantity.price}</td>

            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            if(qty > 1) {update('decrement')}
                        }}
                    >
                        -
                    </button>
                    {/* <span className="btn btn-light">{quantity}</span> */}
                    {/* <span className="btn btn-light">4</span> */}
                    <span className="btn btn-light">{qty}</span>

                    <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => { update('increment') }}

                    >
                        +
                    </button>
                </div>
            </td>
            {/* <td>€{(quantity * details.price).toFixed(2)}</td> */}
            <td>€{(details * quantity.price).toFixed(2)}</td>
            <td>

                <button
                    type="button"
                    className="btn btn-danger remove"
                    onClick={() => remove(id)}
                >
                    x
                </button>
            </td>
        </tr>
    );
}


const Table = ({ items }) => {
    return (
        <table>
            <tr>
                <th width="200">Product</th>
                <th width="80">Reference</th>
                <th width="150">Price</th>
                <th width="150">Quantity</th>
                <th width="200">Total</th>
            </tr>
            {
                items.map(item => {
                    return(<Row item={item} />)
                })
            }
        </table>
    );
}

export const CartPage = () => {

    const items = useSelector(state => state.items)
    
    // Sous total
    const [subTotal, setSubTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const shipping = 10.00;

    useEffect(() => {
        let totals = items.map(item => {
            return item.details * item.quantity.price
        })
        // let sousTotal = totals.reduce((item1, item2) => item1 +item2,0)
        setSubTotal(totals.reduce((item1, item2) => item1 +item2,0))
        setTotal(subTotal + shipping)
        // console.log(`Subtotal ${sousTotal}`);
        console.log(`You have ${items.length} in your cart`);
    }, [items, subTotal, total])
    return ( 
        <Fragment>
            <div className="container">
                <div className="row">
                
                    <div className="col-sm cart">
                    <Table items={items} />
                    </div>
                    <div className="col-sm-3 order-summary">
                        <ul className="list-group">
                            <li className="list-group-item">Order Summary</li>

                            <li className="list-group-item">
                                <ul className="list-group flex">
                                    <li className="text-left">Subtotal</li>
                                    <li className="text-right">€{subTotal.toFixed(2)}</li>
                                </ul>
                                <ul className="list-group flex">
                                    <li className="text-left">Shipping</li>
                                    <li className="text-right">€{shipping.toFixed(2)}</li>
                                </ul>
                                <ul className="list-group flex">
                                    <li className="coupon crimson">
                                        <small> Add coupon code </small>
                                    </li>
                                </ul>
                            </li>
                        

                            <li className="list-group-item">
                                <ul className="list-group flex">
                                    <li className="text-left">Total</li>
                                    <li className="text-right">€{subTotal === 0.00 ? "0.00" : total.toFixed(2)}</li>
                                </ul>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-light btn-lg btn-block chekout bg-crimson"
                            disabled="true"
                            // disabled={!items.lenght}
                        >
                            <a href="#" className="white">
                                Checkout
                            </a>
                        </button>
                    </div>
                </div>
            </div>    
        </Fragment>
     );
}
