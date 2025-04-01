import { createContext } from "react";
import { doctors } from "../assets/assets";
// import toast from 'react-toastify'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure styles are loaded
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
export const AppContext = createContext()

const AppContextProvider = (props) => {
    
    const currencySymbol = '$'

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors,setDoctors] = useState([])

      const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'): false)
      const [userData, setUserData] = useState(false)



    const getDoctorsData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/doctor/list')
            if(data.success) {
                 setDoctors(data.doctors); // ✅ Corrected from `data.success` to `data.doctors`

            }
            else {
                toast.error(data.message)
            }
        }

        catch(error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    const loadUserProfileData = async () => {
        try {
            
            const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})

            if(data.success) {
                setUserData(data.userData)
            }

            else {
                toast.error(data.message)
            }
        } 
        
        catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    const value = {
      doctors,getDoctorsData,
      currencySymbol,
      token,setToken,
      backendUrl,
      userData,setUserData,
      loadUserProfileData

  }

    useEffect(()=>{
        getDoctorsData()
    },[])

    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }

        else {
            setUserData(false)
        }
    },[token])




    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

