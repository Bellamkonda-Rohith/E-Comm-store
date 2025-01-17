import  { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setsearchdata } from "../../Redux/InputChangeSlice";

const FilterCheckbox = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategory = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    dispatch(setsearchdata(value));
    navigate("/Filterbycategory");
    };
    const handleall = (event) => {
        const value = event.target.value
        setSelectedCategory(value);
        if (value === "All") {
            navigate("/Products")
        }
     }

  return (
      <div className=" grid grid-cols-2 md:grid-cols-5 flex justify-center items-center w-full bg-white ">
           <div className="space-x-2 flex items-center justify-start  md:justify-center ps-5 md:ps-0">
        <input
          type="checkbox"
          id="All"
          name="All"
          value="All"
          checked={selectedCategory === "All"}
          onChange={handleall} className="pr-5"
        />
        <label htmlFor="All">All</label>
      </div>
      <div className="space-x-2 flex items-center justify-start  md:justify-center ps-5 md:ps-0">
        <input
          type="checkbox"
          id="men-clothing"
          name="men-clothing"
          value="men's clothing"
          checked={selectedCategory === "men's clothing"}
          onChange={handleCategory}
        />
        <label htmlFor="men-clothing">Mens Clothing</label>
       </div>
      <div className="space-x-2 flex items-center justify-start  md:justify-center ps-5 md:ps-0">
        <input
          type="checkbox"
          id="women-clothing"
          name="women-clothing"
          value="women's clothing"
          checked={selectedCategory === "women's clothing"}
          onChange={handleCategory}
        />
        <label htmlFor="women-clothing">Womens Clothing</label>
      </div>
      <div className="space-x-2 flex items-center justify-start  md:justify-center ps-5 md:ps-0">
        <input
          type="checkbox"
          id="jewelery"
          name="jewelery"
          value="jewelery"
          checked={selectedCategory === "jewelery"}
          onChange={handleCategory}
        />
        <label htmlFor="jewelery">Jewelery</label>
      </div>
      <div className="space-x-2 flex items-center justify-start  md:justify-center ps-5 md:ps-0">
        <input
          type="checkbox"
          id="electronics"
          name="electronics"
          value="electronics"
          checked={selectedCategory === "electronics"}
          onChange={handleCategory}
        />
        <label htmlFor="electronics">Electronics</label>
          </div>
         
    </div>
  );
};

export default FilterCheckbox;
