import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Favorite } from "../types";
import { Trash2 } from "lucide-react";
import { removeFavorite } from "../store/favoriteSlice";

const FavoritesList: React.FC = () => {
  const dispatch = useDispatch();
  const { items: favorites, selectedCategory } = useSelector(
    (state: RootState) => state.favorites
  );

  const handleRemoveFavorite = (item: Favorite) => {
    dispatch(removeFavorite(item));
  };

  const filteredFavorites =
    selectedCategory === "all"
      ? favorites
      : favorites.filter((fav) => fav.category === selectedCategory);

  return (
    <ul className="space-y-4">
      {filteredFavorites.map((item, index) => (
        <li key={index} className="bg-white p-4 rounded-md shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <button
              onClick={() => handleRemoveFavorite(item)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
          {item.category === "people" && "birth_year" in item && (
            <div>
              <p>Birth Year: {item.birth_year}</p>
              <p>Eye Color: {item.eye_color}</p>
              <p>Skin Color: {item.skin_color}</p>
              <p>Homeworld: {item.homeworld}</p>
            </div>
          )}
          {item.category === "planets" && "climate" in item && (
            <div>
              <p>Climate: {item.climate}</p>
              <p>Terrain: {item.terrain}</p>
            </div>
          )}
          {item.isCustom && (
            <p className="text-sm text-gray-500 mt-2">Custom Entry</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FavoritesList;
