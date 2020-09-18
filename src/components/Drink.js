import React from "react";
import PropTypes from "prop-types";

function Drink(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenDrinkClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>{props.price}</p>
      </div>
      <button onClick={() => props.whenUptapClicked(props.id)}>Add Unit</button>
      <p>{props.tap} units</p>
      <button onClick={() => props.whenDowntapClicked(props.id)}>
        Remove Unit
      </button>
      <hr />
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  picture: PropTypes.string,
  tap: PropTypes.number,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func,
  whenUptapClicked: PropTypes.func,
  whenDowntapClicked: PropTypes.func,
};

export default Drink;
