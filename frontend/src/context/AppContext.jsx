import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { useEffect } from "react";


export const Appcontext = createContext();

const AppContextProvider = (props) => {

    const [users, setusers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const backendUrl = "https://mtub.onrender.com"

    const fetchUsers = async () => {


        setIsLoading(true)

        try {
            const resposne = await axios.get(`${backendUrl}/user/getUser`);
            console.log(resposne);

            if (resposne.data.success) {
                setusers(resposne.data.users)
            }
            else {
                console.log(resposne.data.message);

            }
        } catch (error) {
            console.log(error);

        }

        setIsLoading(false)


    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const value = {
        users,
        isLoading,
        fetchUsers

    }

    return (<Appcontext.Provider value={value}>
        {props.children}
    </Appcontext.Provider>)




}

export default AppContextProvider;