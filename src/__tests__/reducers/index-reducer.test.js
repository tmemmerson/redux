import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import drinkListReducer from "../../reducers/drink-list-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Check that initial state of drinkListReducer matches root reducer", () => {
    expect(store.getState().masterDrinkList).toEqual(
      drinkListReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });

  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterDrinkList: {},
      formVisibleOnPage: false,
    });
  });

  test("Check that initial state of drinkListReducer matches root reducer", () => {
    const action = {
      type: "ADD_DRINK",
      name: "Pokemon",
      brand: "James",
      flavor: "Pikachu",
      price: "5",
      picture: "nice picture",
      tap: 3,
      id: 1,
    };
    store.dispatch(action);
    expect(store.getState().masterDrinkList).toEqual(
      drinkListReducer(undefined, action)
    );
  });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    const action = {
      type: "TOGGLE_FORM",
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action)
    );
  });
});
