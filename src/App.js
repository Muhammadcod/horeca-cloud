import React from "react";
import CartItems from "./Components/CartItems";
import UserBar from "./Components/UserBar";
import ProductList from "./Components/ProductList";
import Switch from "./Components/Switch";
import productData from "./productData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: productData
    };
  }
  render() {
    const productItems = this.state.product.map(item => (
      <ProductList key={item.id} item={item} />
    ));

    return (
      <div className="App">
        <div class="d-flex banner">
          <div className=" border sideA">
            hvdhcdjcjidijxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxcidocjdo
          </div>
          <div className=" border sideB">
            <div className="mb-5 ">
              <UserBar />
            </div>

            <div className="d-flex">
              <div className="sideBA">
                <div className="container ">
                  <Switch />
                </div>
                <div className="container bg-white productList">
                  <div className="row pl-2 pt-2">{productItems}</div>
                </div>
              </div>
              <div className="sideBB bg-white  border">
                <CartItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
