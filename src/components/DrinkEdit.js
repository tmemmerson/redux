import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function DrinkEdit(props) {
  const { drink } = props;
  function handleEditingDrinkInList(event) {
    event.preventDefault();
    props.onEditDrink({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      picture: event.target.picture.value,
      tap: drink.tap,
      id: drink.id, // keep the id the same, edit everything else using event listener
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditingDrinkInList}
        buttonText="Update Drink"
        defaultName={drink.name}
        defaultBrand={drink.brand}
        defaultFlavor={drink.flavor}
        defaultPrice={drink.price}
        defaultPicture={drink.picture}
      />
    </React.Fragment>
  );
}

DrinkEdit.propTypes = {
  drink: PropTypes.object,
  onEditDrink: PropTypes.func,
};

export default DrinkEdit;
