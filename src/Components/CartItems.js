import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Items</th>
        <th scope="col">Qty</th>
        <th scope="col">Price</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
  );
};
const TableBody = props => {
  return (
    <tbody>
      <tr>
        <th scope="col">{}</th>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
      </tr>
    </tbody>
  );
};

function CartItems() {
  return (
    <>
      <table className="table border mx-0">
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
}

export default CartItems;
