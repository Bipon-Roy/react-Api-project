import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    };

    console.log(handleVisitedCountry);
    return (
        <div className={`countryStyle ${visited && "visited_country"}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited && "I have Visited the Country"}
        </div>
    );
};

export default Country;
