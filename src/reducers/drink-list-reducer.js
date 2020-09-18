export default (state = {}, action) => {
  const { name, brand, flavor, price, picture, tap, id } = action;
  switch (action.type) {
    case "ADD_DRINK":
      return Object.assign({}, state, {
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
    case "DELETE_DRINK":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
