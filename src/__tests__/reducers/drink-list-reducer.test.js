import drinkListReducer from "../../reducers/drink-list-reducer";

describe("drinkListReducer", () => {
  let action;
  const drinkData = {
    name: "drink",
    brand: "Grant",
    flavor: "Pikachu",
    price: "4/21/1992",
    picture: "nice picture",
    tap: 3,
    id: 1,
  };

  const currentState = {
    1: {
      name: "drink",
      brand: "Grant",
      flavor: "Pikachu",
      price: "4/21/1992",
      picture: "nice picture",
      tap: 3,
      id: 1,
    },
    2: {
      name: "GloomHaven",
      brand: "Megan",
      flavor: "Scourge",
      price: "4/22/1992",
      picture: "evil picture",
      tap: 5,
      id: 2,
    },
  };

  test("Should succesfully delete a drink", () => {
    action = {
      type: "DELETE_DRINK",
      id: 1,
    };
    expect(drinkListReducer(currentState, action)).toEqual({
      2: {
        name: "GloomHaven",
        brand: "Megan",
        flavor: "Scourge",
        price: "4/22/1992",
        picture: "evil picture",
        tap: 5,
        id: 2,
      },
    });
  });

  test("Should successfully add new drink data to masterDrinkList", () => {
    const { name, brand, flavor, price, picture, tap, id } = drinkData;
    action = {
      type: "ADD_DRINK",
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      picture: picture,
      tap: tap,
      id: id,
    };

    expect(drinkListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        picture: picture,
        tap: tap,
        id: id,
      },
    });
  });

  // add update functionality that uses add ticket functionality plus allows it to edit ticket information and then add the ticket
  test("Should successfully update a drink", () => {
    const { name, brand, flavor, price, picture, tap, id } = drinkData;
    action = {
      type: "ADD_DRINK",
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      picture: picture,
      tap: tap,
      id: id,
    };

    // had to define new variables to input into expect statement below
    const stateToUpdate = drinkListReducer({}, action);
    const updateAction = {
      type: "ADD_DRINK",
      name: "funny drink",
      brand: "Allison",
      flavor: "blah blah",
      price: price,
      picture: picture,
      tap: tap,
      id: id,
    };
    expect(drinkListReducer(stateToUpdate, updateAction)).toEqual({
      [id]: {
        name: "funny drink",
        brand: "Allison",
        flavor: "blah blah",
        price: price,
        picture: picture,
        tap: tap,
        id: id,
      },
    });
  });

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(drinkListReducer({}, { type: null })).toEqual({});
  });
});
