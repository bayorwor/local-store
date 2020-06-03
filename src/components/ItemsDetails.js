import React, { useContext } from "react";
import {
  Card,
  CardImg,
  CardHeader,
  CardText,
  CardFooter,
  Col,
} from "reactstrap";
import { styles } from "../styles/styles";
import { ItemContext } from "../contexts/ItemContext";
import "../styles/styles.css";

const ItemsDetails = ({ items }) => {
  const { removeItem } = useContext(ItemContext);
  return (
    <Col sm="3" onClick={() => removeItem(items.id)}>
      <Card style={{ margin: styles.itemList.margin }} id="card">
        <CardHeader>{items.name}</CardHeader>
        <CardImg src="logo512.png" />
        <CardFooter>
          <CardText style={styles.price}>GHC {items.price}.00</CardText>
          <CardText>{items.desc}</CardText>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default ItemsDetails;
