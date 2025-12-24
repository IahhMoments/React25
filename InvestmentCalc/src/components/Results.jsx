import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInput }) {
  const data = calculateInvestmentResults(userInput);
  console.log(data);
  return <p>Results...</p>;
}
