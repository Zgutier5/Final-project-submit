import React from 'react'
import ProductListItem from './ProductListItem'
import { connect } from './Cart'
import { cartItemsWtihQuantities } from './Cart'
import Electronics from '../Electronics';

function ProductListing(props) {
    return <div className='product-listing'>
        {
            props.product.map( product =>
                <ProductListItem
                product={Electronics.listElectronics}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                cart={(props.cart.filter(cartItem => cartItem.id === Electronics.id) [0])}
            />)
        }
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)