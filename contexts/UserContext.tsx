// React Hooks
import { createContext, useState } from "react";


// type
type UserContextApiProps = {
    children: React.ReactNode
}

type userType = {
    fullName: string,
    email: string
    bvn: string,
    number: string,
    accountType: string,
    country: string
}

type userContextType = {
    user: userType | null,
    setUser: React.Dispatch<React.SetStateAction<userType | null>>
}

export const UserContextData = createContext<userContextType | null>(null);


const UserContextApi = ( { children }: UserContextApiProps ) => {

    const [user, setUser] = useState<userType | null>(null);
    return(
        <UserContextData value = {{user, setUser}}>
            {children}
        </UserContextData>
    )
}

export default UserContextApi;