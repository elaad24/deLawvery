import React from "react";
import Form from "./Form";

const EditPage = ({ orderNumber, order, callbackEditMode }) => {
  return (
    <div className="d-flex  flex-column mt-4 gap-3 ">
      <h1 className="text-end">
        <b>הזמנה {orderNumber}</b>
      </h1>
      <Form
        type="edit"
        id={order.id}
        date={order.date}
        firstName={order.name}
        lastName={order.last}
        callbackEditMode={callbackEditMode}
      />
    </div>
  );
};

export default EditPage;
