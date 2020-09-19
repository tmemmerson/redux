import React from "react";
import AddDrinkForm from "./AddDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from "./DrinkDetail";
import DrinkEdit from "./DrinkEdit";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DrinkControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDrink: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: "TOGGLE_FORM",
      };
      dispatch(action);
    }
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleAddingNewDrinkToList = (newDrink) => {
    const { dispatch } = this.props;
    const { id, name, brand, flavor, price, picture, tap } = newDrink;
    const action = {
      type: "ADD_DRINK",
      id: id,
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      picture: picture,
      tap: tap,
    };
    dispatch(action);
    const action2 = {
      type: "TOGGLE_FORM",
    };
    dispatch(action2);
  };

  handleEditingDrinkInList = (drinkToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, flavor, price, picture, tap } = drinkToEdit;
    const action = {
      type: "ADD_DRINK",
      id: id,
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      picture: picture,
      tap: tap,
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedDrink: null,
    });
  };

  handleDeletingDrink = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_DRINK",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedDrink: null });
  };

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.props.masterDrinkList[id];
    this.setState({ selectedDrink: selectedDrink });
  };

  handleChangingSelectedUptap = (upTapId) => {
    const drinkToUptap = this.props.masterDrinkList[upTapId];
    const { dispatch } = this.props;
    const { id, name, brand, flavor, price, picture, tap } = drinkToUptap;
    const uptap = tap + 1;
    const action = {
      type: "ADD_DRINK",
      id: id,
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      picture: picture,
      tap: uptap,
    };
    dispatch(action);
  };

  handleChangingSelectedDowntap = (downTapId) => {
    const drinkToDowntap = this.props.masterDrinkList[downTapId];
    const { dispatch } = this.props;
    const { id, name, brand, flavor, price, picture, tap } = drinkToDowntap;
    const downtap = tap - 1;
    if (tap > 0) {
      const action = {
        type: "ADD_DRINK",
        id: id,
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        picture: picture,
        tap: downtap,
      };
      dispatch(action);
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <DrinkEdit
          drink={this.state.selectedDrink}
          onEditDrink={this.handleEditingDrinkInList}
        />
      );
      buttonText = "Return to Drinks";
    } else if (this.state.selectedDrink != null) {
      currentlyVisibleState = (
        <DrinkDetail
          drink={this.state.selectedDrink}
          onClickingDelete={this.handleDeletingDrink}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Drinks";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <AddDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />
      );
      buttonText = "Return to Drinks";
    } else {
      currentlyVisibleState = (
        <DrinkList
          drinkList={this.props.masterDrinkList}
          onDrinkSelection={this.handleChangingSelectedDrink}
          onUptapSelection={this.handleChangingSelectedUptap}
          onDowntapSelection={this.handleChangingSelectedDowntap}
        />
      );
      buttonText = "Add Drink";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

DrinkControl.propTypes = {
  masterPropList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    masterDrinkList: state.masterDrinkList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

DrinkControl = connect(mapStateToProps)(DrinkControl);

export default DrinkControl;
