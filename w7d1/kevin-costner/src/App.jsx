import Header from "./components/Header";
import PlantList from "./components/PlantList";

import "./App.css";

import { plantsArr } from "./data/plantData";

function App() {

  const amountOfPlants = plantsArr.length

  return (
    <div className="App">
      <Header amountOfPlants={amountOfPlants} />
      <main>
        <PlantList plants={plantsArr}/>
      </main>
    </div>
  );
}

export default App;
