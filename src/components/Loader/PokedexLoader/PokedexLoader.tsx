import "./PokedexLoader.css";

import Pagination from "../../Pagination/Pagination";
interface Props {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const PokedexLoader: React.FC<Props> = ({ pageIndex, setPageIndex }) => {
  return (
    <div className="pokedex-container">
      <h1 className="pokemon-main-title">Pokedex</h1>
      <ul className="pokemon-list">
        {Array.from({ length: 20 }).map((_, index) => {
          return (
            <li key={index} className="pokemon-card">
              <p className="pokedex-loader-pokemon-name"></p>
            </li>
          );
        })}
      </ul>
      <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
};

export default PokedexLoader;
