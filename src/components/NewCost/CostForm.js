import "./CostForm.css";
import React, { useState } from "react";

const CostForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    amount: "",
    date: "",
  });

  //   const [name, setName] = useState("");
  //   const [amount, setAmount] = useState();
  //   const [date, setDate] = useState();
  // useState returns an array with two elements: the current state value and a function to update that state value. We can use array destructuring to assign these values to variables. In this case, we are only interested in the function to update the state, so we can ignore the first element of the array by leaving it empty.

  const nameChangeHandler = (event) => {
      // setName(event.target.value);
      
      setUserInput({
          ...userInput,
          name: event.target.value
      });
  };

  const amountChangeHandler = (event) => {
      // setAmount(event.target.value);
      
      setUserInput({
          ...userInput,
          amount: event.target.value
      });
  };

  const dateChangehandler = (event) => {
      // setDate(event.target.value);
      
      setUserInput({
          ...userInput,
          date: event.target.value
      });
  };

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangehandler}
            min="2019-01-01"
            step="2026-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
