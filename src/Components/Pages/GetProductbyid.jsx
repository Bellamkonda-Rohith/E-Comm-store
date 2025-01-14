import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const GetProductbyid = () => {
  const [details, setDetails] = useState(null);
  const id = useSelector((state) => state.Products.value);

  const getthedatabyId = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    if (id) {
      getthedatabyId();
    }
  }, [id]);

  return details ? (
    <div className="flex justify-center items-center bg-gray-900 p-5 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center bg-gray-900 p-4">
          <img src={details.image} alt={details.title} className="max-w-full max-h-[400px] object-contain rounded-lg shadow-lg" />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">{details.title}</h1>
          <p className="text-lg mb-4">{details.description}</p>
          <div className="text-2xl font-semibold text-yellow-400 mb-4">${details.price}</div>
          <button className="mt-auto bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition">Add to Cart</button>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="text-center text-3xl font-bold text-yellow-400 mt-20">Loading...</h1>
  );
};

export default GetProductbyid;
