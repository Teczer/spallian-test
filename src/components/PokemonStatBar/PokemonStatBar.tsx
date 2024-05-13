import "./PokemonStatBar.css";

interface Props {
  statName: string;
  statValue: number;
  percentage: number;
}

const PokemonStatBar: React.FC<Props> = ({
  statName,
  statValue,
  percentage,
}) => {
  return (
    <li className="pokemon-stats textstroke">
      <span className="pokemon-row-stats">
        {statName}: {statValue}
      </span>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </li>
  );
};

export default PokemonStatBar;
