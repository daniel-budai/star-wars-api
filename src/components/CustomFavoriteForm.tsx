import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Favorite } from "../types";
import { addFavorite } from "../store/favoriteSlice";

const CustomFavoriteForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    birth_year: "",
    eye_color: "",
    skin_color: "",
    homeworld: "",
    category: "people" as "people" | "planets",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addFavorite({ ...formData, isCustom: true }));
    setFormData({
      name: "",
      birth_year: "",
      eye_color: "",
      skin_color: "",
      homeworld: "",
      category: "people",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
      </div>
      {formData.category === "people" && (
        <>
          <div>
            <label
              htmlFor="birth_year"
              className="block text-sm font-medium text-gray-700"
            >
              Birth Year
            </label>
            <input
              type="text"
              id="birth_year"
              name="birth_year"
              value={formData.birth_year}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="eye_color"
              className="block text-sm font-medium text-gray-700"
            >
              Eye Color
            </label>
            <input
              type="text"
              id="eye_color"
              name="eye_color"
              value={formData.eye_color}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="skin_color"
              className="block text-sm font-medium text-gray-700"
            >
              Skin Color
            </label>
            <input
              type="text"
              id="skin_color"
              name="skin_color"
              value={formData.skin_color}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="homeworld"
              className="block text-sm font-medium text-gray-700"
            >
              Homeworld
            </label>
            <input
              type="text"
              id="homeworld"
              name="homeworld"
              value={formData.homeworld}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </>
      )}
      {formData.category === "planets" && (
        <>
          <div>
            <label
              htmlFor="climate"
              className="block text-sm font-medium text-gray-700"
            >
              Climate
            </label>
            <input
              type="text"
              id="climate"
              name="climate"
              value={(formData as any).climate || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="terrain"
              className="block text-sm font-medium text-gray-700"
            >
              Terrain
            </label>
            <input
              type="text"
              id="terrain"
              name="terrain"
              value={(formData as any).terrain || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </>
      )}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Custom Favorite
      </button>
    </form>
  );
};

export default CustomFavoriteForm;
