import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  const dataSetValues = props.dataSets.map((dataSet) => dataSet.value); //створюємо масив значень
  const totalMaximum = Math.max(...dataSetValues); //знаходимо найбільше значення в масиві
  return (
    <div className="diagram">
      {props.dataSets.map(
        (
          dataSet, //dataSets розділяємо на dataSet, який містить label та value
        ) => (
          <DiagramBar
            key={dataSet.label} //або dataSet.id, якщо є
            value={dataSet.value}
            maxValue={totalMaximum}
            label={dataSet.label}
          />
        ),
      )}
    </div>
  );
};
export default Diagram;
