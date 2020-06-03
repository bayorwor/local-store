import React, { useState, useContext } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { ItemContext } from "../contexts/ItemContext";

const NewItem = () => {
  const { addItem, toggle, modal } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    addItem(name, desc, price);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="enter item name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Price</Label>
              <Input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="enter item price"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Type</Label>
              <Input type="select" name="select">
                <option></option>
                <option>featured</option>
                <option>not featured</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">description</Label>
              <Input
                type="textarea"
                name="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="enter item description"
              />
            </FormGroup>
            <Button onClick={handleSubmit} color="success">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default NewItem;
