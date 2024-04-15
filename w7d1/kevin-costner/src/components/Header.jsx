export default function Header(props) {
  const { amountOfPlants } = props;

  return (
    <header>
      <h1>Kevin's watering world</h1>
      <h2>Saving {amountOfPlants} {amountOfPlants === 1 ? "plant" : "plants"} from dehydration</h2>
    </header>
  );
}
