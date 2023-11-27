import Record from "../record.json"
import { useState, useEffect } from "react";

export default function Cart(props){
  const [price,setPrice] = useState(0);
    //console.log(props.data.cardData[0].name)
    const total = () => {
      let totalPrice = 0;
      props.data.cardData.forEach((item) => {
        totalPrice += item.price;
      });
      setPrice(totalPrice);
    };
  
    useEffect(() => {
      total();
    });

    return(
    <div>
      <h1 style={{textAlign:"center"}}>CART</h1>
      <div className="cart">
      <div className="cardCart">
      {
      Record &&
        Record.map((records,i) => {
          return (
            
            (props.data.cardData[i]?.id>=0)?
            <div className="cart-wrapper" key={records.id}>
              <div className="img-wrapper item">
                <img
                  src={props.data.cardData[i]?.img}
                  alt="img1"
                />
              </div>
              <div className="text-wrapper item">
                <span>{props.data.cardData[i]?.brand} {props.data.cardData[i]?.name}</span>
                <br />
                <span>Price: ${props.data.cardData[i]?.price}</span>
              </div>
              <div className="btn-wrapper item">
                <button
                  onClick={() => {
                    props.removeFromCartHandler(props.data.cardData[i]?.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>:null
          );
        })}
      </div>
      <div className="cartDetails">
        <h1>Subtotal({props.data.cardData.length} items) : $ {price}</h1>
        <br/>
        <div className="btn-wrapper" >
        <button style={{padding: "2% 15%", fontSize:20}}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </div>
    )
}
