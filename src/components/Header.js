import React from "react";

import AddCart from './AddCart-Icon.png';
function Header(props){
    console.warn("home",props)
    return(
        <div>
            <div className="add-to-cart" >
                <span className="cart-count" >{props.data.cardData.length}</span>
                <img src={AddCart} alt="img" />
            </div>
        </div>
    )
}

export default Header;