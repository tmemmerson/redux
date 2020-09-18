import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import jumbotron from "react-bootstrap/Button";

function DrinkDetail(props) {
  const { drink, onClickingDelete } = props;
  return (
    <React.Fragment>
      <div class="jumbotron">
        <h1>{drink.name}</h1>
        <h3>{drink.brand}</h3>
        <p>
          <em>{drink.price}</em>
        </p>
        <p>
          <Figure>
            <Figure.Image width={250} height={250} src={drink.picture} />
            <Figure.Caption>
              <em>{drink.name}</em>
            </Figure.Caption>
          </Figure>
        </p>
        <p>{drink.flavor}</p>
        <Button
          style={{ margin: 10 }}
          variant="success"
          onClick={props.onClickingEdit}
        >
          Update Drink
        </Button>
        <Button variant="danger" onClick={() => onClickingDelete(drink.id)}>
          Delete Drink
        </Button>
      </div>
      <hr />
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default DrinkDetail;
