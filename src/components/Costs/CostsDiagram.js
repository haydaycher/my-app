import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {
  const diagramDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth(); // отримуємо місяць (0-11)
    diagramDataPoints[costMonth].value += cost.amount; // додаємо суму до відповідного місяця
  }

  return <Diagram dataSets={diagramDataPoints} />;
};
export default CostsDiagram;
