import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import ItemsDetails from "./ItemsDetails";
import { styles } from "../styles/styles";

const ItemList = () => {
  const { items } = useContext(ItemContext);
  return (
    <>
      <div style={styles.itemList}>
        {items.map((item) => {
          return <ItemsDetails items={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
