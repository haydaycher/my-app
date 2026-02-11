import "./CostForm.css";
import React, { useState } from "react";

const CostForm = (props) => {
  //   const [userInput, setUserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });

  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState();
  const [inputDate, setInputDate] = useState();
  // useState returns an array with two elements: the current state value and a function to update that state value. We can use array destructuring to assign these values to variables. In this case, we are only interested in the function to update the state, so we can ignore the first element of the array by leaving it empty.

  const nameChangeHandler = (event) => {
    setInputName(event.target.value); //1st way to update state

    //   setUserInput({
    //       ...userInput,
    //       name: event.target.value
    //   }); // 2nd way to update state, we need to use the spread operator to copy the existing state properties and then update the specific property we want to change. This is necessary because when we update the state, we need to provide a new object that contains all the properties of the previous state, along with any updated values. If we don't use the spread operator, we would be replacing the entire state object with a new object that only contains the updated property, which would result in losing the other properties in the state. By using the spread operator, we ensure that we are creating a new state object that includes all the existing properties and only updates the specific property we want to change.

    //         setUserInput((previousState) => {
    //       return {
    //           ...previousState,
    //           name: event.target.value
    //       };
    //   }) // 3rd way to update state, this way is recommended when the new state depends on the previous state, because React may batch multiple state updates for performance reasons, and the previous state value may not be updated immediately. By using a function that receives the previous state as an argument, we can ensure that we are working with the most up-to-date state value when calculating the new state. This approach helps to avoid potential issues with stale state values and ensures that our state updates are based on the correct previous state.
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);

    //   setUserInput({
    //       ...userInput,
    //       amount: event.target.value
    //   });
  };

  const dateChangehandler = (event) => {
    setInputDate(event.target.value);

    //   setUserInput({
    //       ...userInput,
    //       date: event.target.value
    //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);

    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputAmount}
            onChange={amountChangeHandler}
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            value={inputDate}
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
