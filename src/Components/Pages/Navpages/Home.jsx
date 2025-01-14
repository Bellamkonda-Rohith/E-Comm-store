import personimg from '../Navpages/personshoping.webp';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-gray-900">
      <div className="flex flex-col justify-center items-start p-10 text-center md:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">Welcome to the</span>
          <span className="block text-yellow-400">Best Online Store</span>
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
          Discover amazing products and deals that you cant resist. Shop now and enjoy exclusive offers and discounts!
        </p>
        <div className="mt-5">
          <a
            href="/Products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={personimg} alt="Online Shopping" className="rounded-lg shadow-lg max-w-full h-[90vh] p-5" />
      </div>
    </div>
  );
};

export default Home;
