import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";
import jumbotron from "react-bootstrap/Jumbotron";

function DrinkList(props) {
  return (
    <React.Fragment>
      <div class="container">
        <div class="jumbotron opacity90">
          <hr />
          {Object.values(props.drinkList)
            .map((drink) => (
              <Drink
                whenDrinkClicked={props.onDrinkSelection}
                whenUptapClicked={props.onUptapSelection}
                whenDowntapClicked={props.onDowntapSelection}
                name={drink.name}
                brand={drink.brand}
                flavor={drink.flavor}
                price={drink.price}
                picture={drink.picture}
                id={drink.id}
                tap={drink.tap}
                key={drink.id}
              />
            ))
            .sort((a, b) => b.props.tap - a.props.tap)}
        </div>
      </div>
      <div id="app"></div>
    </React.Fragment>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.object,
  onDrinkSelection: PropTypes.func,
  onUptapSelection: PropTypes.func,
  onDowntapSelection: PropTypes.func,
};

export default DrinkList;
