import React from "react";
import magnifyingGlass from "../images/magnifyingGlass.svg";

function Switch() {
  return (
    <div className="d-flex" style={{ padding: "5px 5px" }}>
      <div class="switch-field mr-auto">
        <input
          type="radio"
          id="radio-one"
          name="switch-one"
          value="yes"
          checked
        />
        <label for="radio-one">Walk-In Customer</label>
        <input type="radio" id="radio-two" name="switch-one" value="no" />
        <label for="radio-two">Room Service</label>
      </div>

      <span className=" border-circle bg-white d-block text-center">
        <img src={magnifyingGlass} className=" " alt="" />
      </span>
    </div>
  );
}

export default Switch;
