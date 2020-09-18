import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            defaultValue={props.defaultName}
            placeholder="name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="brand"
            defaultValue={props.defaultBrand}
            placeholder="drink brand"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            name="flavor"
            defaultValue={props.defaultFlavor}
            placeholder="flavor description"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="price"
            defaultValue={props.defaultPrice}
            placeholder="price"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="picture"
            defaultValue={props.defaultPicture}
            placeholder="image url"
          />
        </Form.Group>
        <div style={{ padding: 10 }}>
          <Button variant="info" type="submit">
            {props.buttonText}
          </Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  defaultName: PropTypes.string,
  defaultBrand: PropTypes.string,
  defaultFlavor: PropTypes.string,
  defaultPrice: PropTypes.string,
  defaultPicture: PropTypes.string,
};

export default ReusableForm;
