// import { createContext, useState, useContext } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         isLogged:false,
//         email:null
//     });
//     const login = (user) => {
//         setUser(user)
//     }
//     const logout = () => {
//         setUser(null)
//     }


//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
// export const useAuth = () => {
//     return useContext(AuthContext)
// }  


import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLogged: false,
        email: null,
    });

    const login = (userData) => {
        setUser({
            isLogged: true,
            email: userData.email,
        });
    };

    const logout = () => {
        setUser({
            isLogged: false,
            email: null,
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
