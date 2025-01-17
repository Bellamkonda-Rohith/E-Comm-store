import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  setsearchdata } from '../Redux/InputChangeSlice';
import FilterCheckbox from './Pages/Filtercheckbox';

const HeaderSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addition = useSelector((state) => state.Products.value);

  const handleSearch = (event) => {
    dispatch(setsearchdata(event.target.value));
    navigate('/SearchProducts');
  };

  return (
    <>
      <div className='sticky top-0 z-50'>
      <div className="grid grid-cols-1 md:grid-cols-3 p-2 text-white bg-gray-900  w-full">
      <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0 bg-yellow-500 md:bg-gray-900 rounded-lg p-2">
        <h1 className="text-3xl font-bold">amazon {addition}</h1>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-0">
        <input
          type="search"
          placeholder="search here"
          className="p-3 w-full md:w-[500px] border border-gray-700 rounded-lg shadow text-md bg-gray-800 text-white"
          onChange={handleSearch}
        />
      </div>
      <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0">
        <ul className="flex space-x-4">
          <li className="hover:bg-yellow-500 p-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-yellow-500 p-2 rounded">
            <Link to="/Products">Products</Link>
          </li>
          <li className="hover:bg-yellow-300 p-2 rounded">
            <Link to="/Signin">Signin</Link>
          </li>
          <li className="hover:bg-yellow-300 p-2 rounded">
            <Link to="/Signup">Signup</Link>
          </li>
          <li className="hover:bg-yellow-300 p-2 rounded">
            <Link to="/contact">ContactUs</Link>
          </li>
        </ul>
      </div>
      
      </div>
      <div>
        <FilterCheckbox/>
      </div>
    </div>
    </>

  );
};

export default HeaderSection;
