import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (year) => {
    // console.log("In Costs.js");
    // console.log(year);
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((costs) => {
    return costs.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <li>
        <Card className="costs">
          <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
          <CostList costs={filteredCosts} />
        </Card>
      </li>
    </div>
  );
};
export default Costs;
