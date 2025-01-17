import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettheid } from '../../Redux/ProductsSlice';
import { useNavigate } from 'react-router-dom';

const SearchProducts = () => {
  const inputdata = useSelector((state) => state.Searchdata.Searchdata);
  const products = useSelector((state) => state.Productresponsedata.data);
console.log("inputdata",inputdata)
  console.log("Input Data:", inputdata);
  console.log("Products:", products);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(inputdata.toLowerCase())
  );
  const dispatch=useDispatch()
const navigate=useNavigate()
  console.log("Filtered Products:", filteredProducts);
 const handleTheId = useCallback(
    (id) => {
      dispatch(gettheid(id));
      navigate(`/Products/${id}`);
    },
    [dispatch, navigate]
  );
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-yellow-400">Search Results</h2>
        {filteredProducts.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => {
              const { title, price, image, rating, id } = product;
              const { rate } = rating;
              return (
                <div
                  key={id}
                  className="group relative bg-gray-800 text-white p-3 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700"
                  onClick={() => handleTheId(id)}
                >
                  <div className="flex align-center justify-center">
                    <img alt={title} src={image} className="h-[200px] w-[200px] object-contain rounded-lg" />
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
        ) : (
          <p className="text-yellow-400 text-center text-2xl mt-5">No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
