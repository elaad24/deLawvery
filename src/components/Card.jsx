import React from "react";
import pencil from "../images/pencil.svg";
import xIcon from "../images/xIcon.svg";
import { useDispatch } from "react-redux";
import { removeOrder } from "../redux/slices/ordereSlice";

const Card = ({
  itemNumber,
  name,
  id,
  last,
  date,
  callbackEditMode,
  callbackEditItem,
  editMode,
}) => {
  const dispatch = useDispatch();
  const remove = (idNumber) => {
    dispatch(removeOrder(idNumber));
  };

  const edit = () => {
    callbackEditMode(true);
    callbackEditItem({ id, name, last, date, itemNumber });
  };

  return (
    <div className="orderCard">
      <div className="cardFunctions">
        <button onClick={edit} disabled={editMode}>
          <img src={pencil} alt="Edit" width="10" />
        </button>
        <button onClick={() => remove(id)}>
          <img src={xIcon} alt="Delete" width="10" />
        </button>
      </div>
      <div>
        <b>הזמנה {itemNumber}</b>
        <div>
          <b>פרטים</b>
          <div>
            {name} ,{last}
          </div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
