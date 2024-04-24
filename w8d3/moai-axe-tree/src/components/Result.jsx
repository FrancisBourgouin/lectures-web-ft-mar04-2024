export default function Result(props) {
  const {winner} = props
  return (
    <footer>
      {!winner && <h2 data-testid="waiting">Waiting for your choice!</h2>}
      {winner === "computer" && <h2 data-testid="result">SKYNET IS BACK BABY!</h2>}
      {winner === "player" && <h2 data-testid="result">We won, for now.</h2>}
      {winner === "tie" && <h2 data-testid="result">Windsor or nothing.</h2>}
    </footer>
  );
}
