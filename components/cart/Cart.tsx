import { Fragment } from 'react'
import styles from '../../styles/Cart.module.scss'
import CartItem from './CartItem'
import Link from 'next/link'

interface IProduct {
    image: string
    name: string
    totalPrice: number
    qty: number
    price: number
    slug: string
}

interface IProducts {
    products: IProduct[]
    quantity: number
    totalStatePrice: number
    handleChange: (event: any) => void
}

export default function Cart(props : IProducts) {
    const { totalStatePrice } = props
    return (
        <>
            { props.products ? (
                <Fragment>
                <table className={styles.cart__table}>
                <thead style={{ borderBottom: 'solid 1px #e2e2e2', height: '60px' }}>
                    <tr>
                        <th colSpan={2}>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>

                    <tbody>

                        <CartItem 
                            totalStatePrice={props.totalStatePrice}
                            quantity={props.quantity}
                            products={props.products}
                            handleChange={props.handleChange}
                        />

                    </tbody>
                </table>

            <footer>
                <div className={styles.cart__grid} style={{ display: 'flex' }}>
                    <div className="cart__note" style={{ width: '100%' }}></div>
                    <div className={styles.cart__right} style={{ width: '100%', padding: '2rem 0' }}>
                        <div className="cart__coupon--container"></div>
                        <div className={styles.cart__subtotal}>
                            <h5 className={styles.cart__subtotalText} style={{ fontWeight: 'bold' }}>Subtotal <span>{ totalStatePrice }</span></h5>
                        </div>
                        <p className={styles.cart__taxesTxt}>Taxes calculated at checkout</p>
                        <div className={styles.cart__checkoutBtnContainer} style={{ width: '100%', textAlign: 'right' }}>
                            <Link href="/checkout">
                                <a>
                                    <button className={`rounded-0 btn btn-primary ${ styles.cart__button }`}>Checkout</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
                </Fragment>
            ) : (
                <Fragment>
                    <div className="cart__empty" style={{ textAlign: 'center', fontWeight: 100 }}>
                        <p>Your shopping cart is empty</p>
                        <Link href="/">
                            <a>
                            <button className="btn btn-primary rounded-0" style={{ 
                                fontWeight: 100, 
                                textTransform: 'uppercase', 
                                fontSize: '0.7rem',
                                padding: '0.9rem 2rem',
                                letterSpacing: '2px',
                            }}>Continue browsing here</button>
                        </a>
                        </Link>
                    </div>
                </Fragment>
            ) }
        </>
    )
}