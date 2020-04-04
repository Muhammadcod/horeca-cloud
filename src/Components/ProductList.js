import React from "react";

function ProductList(props) {
  return (
    <>
      <div
        class="card productCard bg-black text-white"
        to="/"
        onClick={e => props.handleAddToCart(props.product.id)}
      >
        <img
          src={props.item.image}
          class="card-img"
          alt={props.item.title}
          style={{ width: "245px", height: "230px;", backgroundColor: "white" }}
        />
        <div class="card-img-overlay pl-2 pt-5">
          <p class="card-text pupBg small text-center mb-1">
            N {props.item.price}
          </p>
          <p class="card-text bg-white whitBg small">
            {props.item.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductList;
