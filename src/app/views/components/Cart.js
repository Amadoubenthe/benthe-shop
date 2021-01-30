import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Row = (props) => {

    const { quantity, details } = props.item;
    // const [qty, setQty] = useState(quantity);
    return (
        <tr>
            <td>
                <img
                    width="70"
                    height="70"
                    src={process.env.PUBLIC_URL + `/assets/${details.categoray}/${details.image}`}
                    alt={details.name}
                />
            </td>
            <td>{details.ref}</td>
            <td>{details.price}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        // onClick={() => setQty(qty)}
                        // onClick={}
                    >
                        -
                    </button>
                    <span className="btn btn-light">{quantity}</span>
                    <span className="btn btn-light">1</span>
                    <button
                    type="button"
                    className="btn btn-secondary"
                    // onClick={() => setQty(qty+1)}
                    >
                        +
                    </button>
                </div>
            </td>
            <td>€{(quantity * details.price).toFixed(2)}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger remove"
                >
                    x
                </button>
            </td>
        </tr>
    );
}


const Table = () => {
    const items = useSelector(state => state.items)
    useEffect(() => {
        console.log(`You have ${items.length} in your cart`);
    })
    return (
        <table>
            <tr>
                <th width="200">Product</th>
                <th width="80">Reference</th>
                <th width="150">Price</th>
                <th width="150">Quantity</th>
                <th width="200">Total</th>
            </tr>
            {/* <Row /> */}
            {
                items.map(item =>{
                    return (<Row item={item} />)
                })
            }
        </table>
    );
}

export const CartPage = () => {
    return ( 
        <Fragment>
            <div className="container">
                <div className="row">
                
                    <div className="col-sm cart">
                    <Table />
                    </div>
                    <div className="col-sm-3 order-summary">
                        <ul className="list-group">
                            <li className="list-group-item">Order Summary</li>

                            <li className="list-group-item">
                                <ul className="list-group flex">
                                    <li className="text-left">Subtotal</li>
                                    <li className="text-right">€0.00</li>
                                </ul>
                                <ul className="list-group flex">
                                    <li className="text-left">Shipping</li>
                                    <li className="text-right">€0.00</li>
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
                                    <li className="text-right">€0.00</li>
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


// // const Table = () => {
// //     return (
// //         <>  
// //             <table class="table">
// //             <thead>
// //                 <tr>
// //                 <th scope="col">#</th>
// //                 <th scope="col">First</th>
// //                 <th scope="col">Last</th>
// //                 <th scope="col">Handle</th>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //                 <tr>
// //                 <th scope="row">1</th>
// //                 <td>Mark</td>
// //                 <td>Otto</td>
// //                 <td>@mdo</td>
// //                 </tr>
// //                 <tr>
// //                 <th scope="row">2</th>
// //                 <td>Jacob</td>
// //                 <td>Thornton</td>
// //                 <td>@fat</td>
// //                 </tr>
// //                 <tr>
// //                 <th scope="row">3</th>
// //                 <td>Larry</td>
// //                 <td>the Bird</td>
// //                 <td>@twitter</td>
// //                 </tr>
// //             </tbody>
// //             </table>
// //         </>     
// //     );
// // }



// export const CartPage = () => {
//     return ( 
//         <>
//             <div className="container">
//                 <div className="row">
                
//                     <div className="col-sm cart">
//                     <Table />
//                     comprendre le web
//                     </div>
//                     <div className="col-sm-3 order-summary">
//                         <ul className="list-group">
//                             <li className="list-group-item">Order Summary</li>

//                             <li className="list-group-item">
//                                 <ul className="list-group flex">
//                                     <li className="text-left">Subtotal</li>
//                                     <li className="text-right">€0.00</li>
//                                 </ul>
//                                 <ul className="list-group flex">
//                                     <li className="text-left">Shipping</li>
//                                     <li className="text-right">€0.00</li>
//                                 </ul>
//                                 <ul className="list-group flex">
//                                     <li className="coupon crimson">
//                                         <small> Add coupon code </small>
//                                     </li>
//                                 </ul>
//                             </li>
                        

//                             <li className="list-group-item">
//                                 <ul className="list-group flex">
//                                     <li className="text-left">Total</li>
//                                     <li className="text-right">€0.00</li>
//                                 </ul>
//                             </li>
//                         </ul>
//                         <button
//                             type="button"
//                             className="btn btn-light btn-lg btn-block chekout bg-crimson"
//                             // disabled={!items.lenght}
//                         >
//                             <a href="#" className="white">
//                                 Checkout
//                             </a>
//                         </button>
//                     </div>
//                 </div>
//             </div>    
//         </>
//      );
// }

// // export default CartPage;