import React from 'react'
import electronics from '../Electronics'
import AddButton from './addbutton'
import RemoveButton from './removebutton'

export default function ProductListItem(props) {
    
    return <div className='productListItem'>
        <h3>{props.electronics.product}</h3>
        <img
            height={100}
            title={ props.electronics.product }
            src={`/products/${props.electronics.image}`}
        />
        
        <div>{ props.electronics.price }</div>
        <div>
           <AddButton 
           cartItem={props.cartItem} 
           product={props.electronics}
           addToCart={props.addToCart}
           />

           {
            props.cartItem
                ? <RemoveButton 
                    cartItem={props.cartItem} 
                    product={props.electronics}
                    removeFromCart={props.removeFromCart}
                /> 
                : null 
           } 

           
        </div>
    </div>
}