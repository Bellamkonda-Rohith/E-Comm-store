import HeaderSection from "../HeaderSection"
import GetProductbyid from "../Pages/GetProductbyid"
import Home from "../Pages/Navpages/Home"
import Products from "../Pages/Products"
import SearchProducts from "../Pages/SearchProducts"
import { BrowserRouter,Routes,Route } from "react-router-dom"
const NavRouting = () => {
  return (
      
      <BrowserRouter>
          <HeaderSection />
          <Routes>
          <Route path="/" element={<Home/>} />
          
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/:id" element={<GetProductbyid />} />
              <Route path="/SearchProducts" element={<SearchProducts />} />

              
          </Routes>
       
       
      </BrowserRouter>
  )
}

export default NavRouting
