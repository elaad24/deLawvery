import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewOrder, editOrder } from "../redux/slices/ordereSlice";

const Form = ({
  type = "add",
  id,
  firstName,
  lastName,
  date,
  callbackEditMode,
}) => {
  const dispatch = useDispatch();

  const completOrder = async (order) => {
    await dispatch(addNewOrder(order));
  };

  const updateOrder = async (order) => {
    await dispatch(editOrder(order));
  };

  let typeText = "";

  if (type === "add") {
    typeText = "הוספה";
  } else if (type === "edit") {
    typeText = "עדכון";
  }
  const firstNameRef = useRef(firstName);
  const lastNameRef = useRef(lastName);
  const dateDataRef = useRef(date);

  const [firstNameErore, setFirstNameErore] = useState("");
  const [lastNameErore, setLastNameErore] = useState("");
  const [dateDataErore, setDateDataErore] = useState("");

  const validation = () => {
    if (firstNameRef.current.value.length < 2) {
      setFirstNameErore("* חייב לרשום שם פרטי  ");
      return false;
    } else {
      setFirstNameErore("");
    }
    if (lastNameRef.current.value.length < 2) {
      setLastNameErore("* חייב לרשום שם משפחה ");
      return false;
    } else {
      setLastNameErore("");
    }
    if (!dateDataRef.current.validity.valid) {
      setDateDataErore("* חייב לבחור תאריך ");
      return false;
    } else {
      setDateDataErore("");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderObject = {
      id: id !== undefined ? id : Math.round(Math.random() * 1e10),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      date: dateDataRef.current.value,
    };

    if (validation()) {
      if (type === "add") {
        await completOrder(orderObject);
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dateDataRef.current.value = "";
      } else if (type === "edit") {
        await updateOrder(orderObject);
        await callbackEditMode(false);
      }
    }
  };

  return (
    <form>
      <div className=" d-flex  flex-row gap-5" name="personal info">
        <div className="form-group text-end">
          <label className="text-muted" htmlFor="first-name">
            שם פרטי
            {firstNameErore ? (
              <span className="small text-danger"> {firstNameErore}</span>
            ) : (
              ""
            )}
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            aria-describedby="first-name"
            minLength="2"
            maxLength="50"
            required
            defaultValue={
              typeof firstNameRef?.current == "string"
                ? firstNameRef.current
                : ""
            }
            ref={firstNameRef}
          />
        </div>
        <div className="form-group text-end ">
          <label className="text-muted " htmlFor="last-name">
            שם משפחה
            {lastNameErore ? (
              <span className="small text-danger"> {lastNameErore}</span>
            ) : (
              ""
            )}
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            required
            minLength="2"
            maxLength="50"
            defaultValue={
              typeof lastNameRef?.current == "string" ? lastNameRef.current : ""
            }
            ref={lastNameRef}
          />
        </div>
      </div>

      <div className="d-flex flex-column w-45  gap-4 mt-2">
        <div className="form-group d-flex flex-column">
          <label className="text-muted text-end " htmlFor="date">
            תאריך
            {dateDataErore ? (
              <span className="small text-danger"> {dateDataErore}</span>
            ) : (
              ""
            )}
          </label>
          <input
            type="date"
            placeholder="Date Picker"
            className="form-control"
            id="date"
            min={new Date(Date.now()).toISOString().slice(0, 10)}
            max="12/12/2022"
            required
            defaultValue={
              typeof dateDataRef?.current == "string"
                ? new Date(date).toISOString().slice(0, 10)
                : ""
            }
            ref={dateDataRef}
          />
        </div>

        <button onClick={(e) => handleSubmit(e)} className="btn btn-secondary">
          <b>{typeText}</b>
        </button>
      </div>
    </form>
  );
};

export default Form;
