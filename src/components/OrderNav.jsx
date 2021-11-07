import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const OrderNav = ({ callbackEditMode, callbackEditItem, editMode }) => {
  let orders = useSelector((state) => state.orderReducer.orders);
  return (
    <div className="sidenav  border d-flex flex-column">
      <h5 className="text-center mt-5">
        <b>רשימת הזמנות</b>
      </h5>
      <h6>מספר הזמנות: {orders.length}</h6>

      {orders.map((order, index) => (
        <Card
          date={order.date}
          itemNumber={index + 1}
          id={order.id}
          last={order.lastName}
          name={order.firstName}
          key={order.id}
          callbackEditMode={callbackEditMode}
          callbackEditItem={callbackEditItem}
          editMode={editMode}
        />
      ))}
    </div>
  );
};

export default OrderNav;
