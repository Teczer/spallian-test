import "./PokemonTypes.css";

interface Type {
  name: string;
}

interface Props {
  backgroundColor: string;
  icon: string;
  type: Type;
}

const PokemonTypes: React.FC<Props> = ({ backgroundColor, icon, type }) => {
  return (
    <li
      className="pokemon-ability"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <img className="type-icon" src={icon} alt={type.name} />
      <span className="textstroke">{type.name}</span>
    </li>
  );
};

export default PokemonTypes;
