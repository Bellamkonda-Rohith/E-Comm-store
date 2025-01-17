import HeaderSection from "../HeaderSection"
import Filterbycategory from "../Pages/Filterbycategory/Filterbycategory"

import GetProductbyid from "../Pages/GetProductbyid"
import Home from "../Pages/Navpages/Home"
import Signin from "../Pages/Navpages/Signin"
import Signup from "../Pages/Navpages/Signup"
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
              <Route path="/Filterbycategory" element={<Filterbycategory />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Signin" element={<Signin />} />


              

              

              
          </Routes>
       
       
      </BrowserRouter>
  )
}

export default NavRouting
