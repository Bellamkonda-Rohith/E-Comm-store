import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettheid } from '../../Redux/ProductsSlice';
import { useNavigate } from 'react-router-dom';
import { setdata } from '../../Redux/ApiResponse';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Productresponsedata.data);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getProductsDataFunc = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setdata(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsDataFunc();
  }, [dispatch]);

  const handleTheId = useCallback(
    (id) => {
      dispatch(gettheid(id));
      navigate(`/Products/${id}`);
    },
    [dispatch, navigate]
  );

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-yellow-400">View All Products</h2>
        {loading ? (
          <h1 className="text-yellow-400 text-center text-3xl font-black">Loading...</h1>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              const { title, price, image, rating, id } = product;
              const { rate } = rating;
              return (
                <div
                  key={id}
                  className="group relative bg-gray-800 text-white p-3 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700"
                  onClick={() => handleTheId(id)}
                >
                  <div className="flex align-center justify-center">
                    <img alt={title} src={image} className="h-[200px] w-[200px] object-contain rounded" />
                  </div>
                  <div className="mt-4 flex justify-between p-2">
                    <p className="mt-1 text-lg font-semibold">{title}</p>
                    <div className="flex flex-col items-end">
                      <p className="text-lg font-medium text-yellow-400">{rate}⭐</p>
                      <p className="text-lg font-medium">${price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
