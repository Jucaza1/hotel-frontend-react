//create a context and a context provider for user JWT token store

import { createContext, useState } from 'react';

interface UserContext {
    userJWT: string;
    setUserJWT: (value: string) => void;
}
const userContext = createContext({} as UserContext);

export default function UserProvider({ children }: React.PropsWithChildren) {
    const [userJWT, setUserJWT] = useState("")
    return (
        <userContext.Provider value={{userJWT, setUserJWT}}>
            {children}
        </userContext.Provider>
    );
}
export { userContext, UserProvider };
