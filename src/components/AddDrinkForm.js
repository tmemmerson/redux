import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function AddDrinkForm(props) {
  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      id: v4(),
      price: event.target.price.value,
      picture: event.target.picture.value,
      tap: 0,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewDrinkFormSubmission}
        buttonText="drink your drink, drink-haste"
      />
    </React.Fragment>
  );
}

AddDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func,
};

export default AddDrinkForm;
