import { calculateDayDifference } from "../helpers/plantHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isWellWatered = calculateDayDifference(lastWatered) < wateringInterval;
  const classname = isWellWatered ? "happy" : "sad";

  return (
    <article className={classname}>
      <h1>
        {name} - {type}
      </h1>
      <p>Last watered on: {lastWatered}</p>
    </article>
  );
}
