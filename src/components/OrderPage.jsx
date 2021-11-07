import React from "react";
import Form from "./Form";

const OrderPage = () => {
  return (
    <div className="d-flex  flex-column mt-4 gap-3 ">
      <h1 className="text-end">
        <b>הזמנה חדשה</b>
      </h1>
      <Form />
    </div>
  );
};

export default OrderPage;
