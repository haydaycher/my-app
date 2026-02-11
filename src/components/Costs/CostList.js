import "./CostList.css";
import CostItem from "./CostItem";

const CostList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">No results for chosen year</h2>;
  }

  return (
    <ul className="costs-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
      ;
    </ul>
  );
};
export default CostList;
