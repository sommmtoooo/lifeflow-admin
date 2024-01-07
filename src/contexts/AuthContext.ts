import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(false)

const {Provider} = AuthContext

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(null)

    useEffect(() => {
        alert("Hey")
    }, [])

    return <Provider value={{auth}}>{children}</Provider>;
};

export {AuthContext, AuthProvider}
