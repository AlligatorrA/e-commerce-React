import React from 'react'
import { useAuth } from './context-folder/auth-context';
import { useCart } from './context-folder/cart-context';
import { useWishlist } from './context-folder/wishList-context';
import useDocumentTitle from './pure-functions/useDocumentTitle';
import { RemoveFromWishlist } from './sevices/WishlistService';

function Wishlist() {
    const { state } = useCart()
    const { wishlistState, wishlistDispatch } = useWishlist()
    const { token } = useAuth()
    const { wishlistCollection } = wishlistState
    useDocumentTitle(`WIshlist ${state.itemsInWishlist} `)


    return (
        <div className='cart-Container overflow'>
            <div className="spacer01"></div>
            <h1>Wishlist {state.itemsInWishlist}</h1>
            <div className="mappedProduct">
                {
                    wishlistCollection.map(product => (


                        <div className="card_container" key={product._id}>
                            <div className="cardImageBox">
                                <i className="fas fa-heart cross_icon pTectColor"
                                ></i>
                                <img
                                    className="card_image"
                                    src={product.url}
                                    height="300px"
                                    alt="oops "
                                />
                            </div>

                            <section className="card_body">
                                <h2> '{product.categories}' watch</h2>
                                <p className="card_paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4> {product.brand} Brand</h4>
                                <p> Rs.-{product.price}</p>
                                <p>{product.discount}% discount</p>
                                <p>
                                    {product.rating}
                                    <i className="fa-solid fa-star"></i> rating
                                </p>
                            </section>

                            <footer className="card-footer ">

                                <button className="btn Card-button asideAlink"
                                    onClick={() => RemoveFromWishlist(token, product._id, wishlistDispatch)}
                                >
                                    {" "}
                                    <span className="btn-txt-colr pTectColor font1en ">
                                        {" "}
                                        Remove from Wishlist
                                    </span>
                                </button>
                            </footer>
                            <div className="spacer"></div>
                        </div >
                    ))
                }
            </div>
        </div>
    )
}

export default Wishlist