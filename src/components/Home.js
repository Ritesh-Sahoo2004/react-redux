import React from "react";
import smartphone from './smartphone.jpg';
// import AddCart from './AddCart-Icon.png';
function Home(props){
    console.warn("home",props)
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper" >
                <div className="img-wrapper item" >
                    <img src={smartphone} alt="product" />
                </div>
                <div className="text-wrapper item" >
                    <span>
                        Realme P1 5G
                    </span>
                    <span>
                        Price: $100,000
                    </span>
                </div>
                <div className="btn-wrapper item" >
                    <button 
                    onClick={()=>
                        {props.addToCartHandler({price:100000,name:'Realme P1 5G'})}
                    }
                     >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;