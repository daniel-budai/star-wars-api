import React from "react";
import { useDispatch } from "react-redux";
import { Person, Planet, Favorite } from "../types";
import { Star } from "lucide-react";
import { addFavorite } from "../store/favoriteSlice";

interface ResultsListProps {
  results: (Person | Planet)[];
  category: "people" | "planets";
}

const ResultsList: React.FC<ResultsListProps> = ({ results, category }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = (item: Favorite) => {
    dispatch(addFavorite(item));
  };

  return (
    <ul className="space-y-4">
      {results.map((item, index) => (
        <li key={index} className="bg-white p-4 rounded-md shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <button
              onClick={() => handleAddFavorite({ ...item, category })}
              className="text-yellow-500 hover:text-yellow-600"
            >
              <Star size={20} />
            </button>
          </div>
          {category === "people" && "birth_year" in item && (
            <div>
              <p>Birth Year: {item.birth_year}</p>
              <p>Eye Color: {item.eye_color}</p>
              <p>Skin Color: {item.skin_color}</p>
              <p>Homeworld: {item.homeworld}</p>
            </div>
          )}
          {category === "planets" && "climate" in item && (
            <div>
              <p>Climate: {item.climate}</p>
              <p>Terrain: {item.terrain}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ResultsList;
