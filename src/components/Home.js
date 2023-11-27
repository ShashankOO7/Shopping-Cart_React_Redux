import React from "react";
import Record from "../record.json";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>PRODUCTS</h1>
      <div className="card">
      {Record &&
        Record.map((records) => {
          return (
            <div className="cart-wrapper" key={records.id}>
              <Link to={`/cart/${records.id}`} style={{textDecoration:'none', display:'flex'}}>
              <div className="img-wrapper item">
                <img
                  src={records.img}
                  alt="img1"
                />
              </div>
              <div className="text-wrapper item">
                <span>{records.brand} {records.name}</span>
                <br /><br />
                <span>Price: ${records.price}</span>
              </div>
              </Link>
              <div className="btn-wrapper item">
                <button
                  onClick={() => {
                    props.addToCartHandler({
                      id: records.id,
                      price: records.price,
                      name: records.name,
                      brand: records.brand,
                      img: records.img,
                      OS: records.OS,
                    });
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  );
}
export default Home;
