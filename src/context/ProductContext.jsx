import React, {createContext, useEffect,useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
  };

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async() =>{
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get("https://api.pujakaitem.com/api/products");
            const products = await res.data;
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
       
    }; 

    useEffect(() => {
        getProducts();
    }, []);

 return (
    <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
 )
};

// custom hook

// const customContext = () =>{
//     return useContext(AppContext);
// };

// export {customContext};

// export default AppContext;
export {AppProvider,AppContext};