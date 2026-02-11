import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  const hideFormHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button className="new-cost__button" onClick={showFormHandler}>
          Add New Cost
        </button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          hideFormHandler={hideFormHandler}
        />
      )}
    </div>
  );
};
export default NewCost;
