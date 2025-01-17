import axios from "axios"
import { useEffect } from "react"


const Signin = () => {
    const Getuser = async () => {
        const url = await axios.get("https://api.escuelajs.co/api/v1/users")
        const response = url.data
        console.log("response",response)
    }
    useEffect(() => {
        Getuser()
    })
  return (
    <div className="flex items-center justify-center h-[90vh] ">
          <div className="bg-white space-y-4 p-10 rounded-xl">
              <div><h1 className="text-center font-bold text-3xl">Signin</h1></div>
              <div> <label htmlFor="email">Email</label><br />
                  <input type="email" placeholder="Enter Email"  id="emial" className="w-100 shadow border-2 border-gray-500 rounded-md p-2"/>
              </div>
              <div> <label htmlFor="password">Password</label><br />
                  <input type="password" placeholder="Enter Password"  id="password"  className="w-100 shadow border-2 border-gray-500 rounded-md p-2"/>
              </div>
              <div className="flex justify-center bg-black rounded-xl text-white text-xl p-2">
                  <button>Submit</button>
              </div>
      </div>
    </div>
  )
}

export default Signin
