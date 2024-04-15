import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;

  // const bunchOfArticles = []

  // for(let i = 0; i < 20; i++){
  //   bunchOfArticles.push(<PlantListItem />)
  // }

  // const parsedPlants = plantsArr.map((plant) => (
  //   <PlantListItem
  //     name={plant.name}
  //     type={plant.type}
  //     lastWatered={plant.lastWatered}
  //     wateringInterval={plant.wateringInterval}
  //   />
  // ));

  // if(Array.isArray(plants)){
  // }
  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  // forEach
  // map
  // reduce

  return (
    <section>
      {parsedPlants}
      {parsedPlants.length === 0 && <h1>THERE IS NO PLANTS HERE!</h1>}
      {!parsedPlants && <h1>THERE IS A PROBLEM WITH YOUR DATA!</h1>}
    </section>
  );
}
