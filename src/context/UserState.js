import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from '../context/UserReducer';
import clientAxios from "../config/axios";


const UserState = (props) => {
    const initialState ={
        users:[]
    };

    const [globalState, dispatch] = useReducer(UserReducer, initialState);
    const addUser= async (data) => {
        const {first_name, last_name, email} = data;
        try {
            const res= await clientAxios.post("/users",{
                first_name,
                last_name,
                email,
            });
            dispatch({
                type: "ADD_USER",
                payload: res.data,
            });
        } catch (error) {
            console.error();
        }
    }
    const readUsers = async() =>{
        try {
            const res= await clientAxios.get("/users");
            console.log(res.data)
            dispatch ({
                type: "READ_USERS",
                payload: res.data,
            });
        } catch (error){
            console.error();
        }
    };
      return (
    <UserContext.Provider
       value={{
        users: globalState.users,
        addUser,
        readUsers,
       }}
    >
    {props.children}
    </UserContext.Provider>
  );
};

export default UserState
