// React Hooks
import { createContext, useState } from "react";


// Data
import CountryData from "../static/ConuntryData";

// Types
type CountryContextApiProps = {
    children: React.ReactNode
}

type countryType = {
    id: string;
    flag: any;
    name: string;
}

type CountryContextType = {
    country: countryType,
    setCountry: React.Dispatch<React.SetStateAction<{
    id: string;
    flag: any;
    name: string;
}>>
}


export const CountryContext = createContext<CountryContextType | null>(null);



const CountryContextApi = ( { children }: CountryContextApiProps ) => {

    const [country, setCountry] = useState(CountryData[0])

    return (
        <CountryContext value={{country, setCountry}}>
            { children }
        </CountryContext>
    )
}

export default CountryContextApi

