import Header from "../components/Header";
import data from "./data";
import Card from "../components/Card";
import "./App.css";

function App() {
  const cardData = data.map((card, index) => {
    return <Card key={index} {...card} />;
  });

  return (
    <>
      <Header />
      {cardData}
    </>
  );
}

export default App;
