import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import FavoritesList from "../components/FavoriteList";
import CustomFavoriteForm from "../components/CustomFavoriteForm";
import { RootState, AppDispatch } from "../store";
import { performSearch, setCategory } from "../store/searchSlice";
import { setSelectedCategory } from "../store/favoriteSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results, category, isLoading } = useSelector(
    (state: RootState) => state.search
  );
  const { items: favorites, selectedCategory } = useSelector(
    (state: RootState) => state.favorites
  );

  useEffect(() => {
    const storedFavorites = localStorage.getItem("starWarsFavorites");
    if (storedFavorites) {
      JSON.parse(storedFavorites).forEach((favorite: unknown) => {
        dispatch({ type: "favorites/addFavorite", payload: favorite });
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("starWarsFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (query: string) => {
    dispatch(performSearch({ query, category }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col mb-4">
          <h2 className="text-2xl font-semibold mb-2">Search</h2>
          <SearchBar onSearch={handleSearch} />
          <select
            value={category}
            onChange={(e) =>
              dispatch(setCategory(e.target.value as "people" | "planets"))
            }
            className="mt-2 px-2 py-2 border border-gray-300 rounded-md w-28"
          >
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ResultsList results={results} category={category} />
        )}
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Favorites</h2>
        <div className="mb-4">
          <select
            value={selectedCategory}
            onChange={(e) =>
              dispatch(
                setSelectedCategory(
                  e.target.value as "all" | "people" | "planets"
                )
              )
            }
            className="px-2 py-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <FavoritesList />
        <h3 className="text-xl font-semibold mt-8 mb-4">Add Custom Favorite</h3>
        <CustomFavoriteForm />
      </div>
    </div>
  );
};

export default HomePage;
