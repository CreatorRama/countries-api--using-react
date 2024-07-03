import { useEffect, useState,useContext} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ModeContext } from './modecontext';

export default function Countrydetails({ imageurl }) {    
    const {mode}=useContext(ModeContext)
    const params = useParams();
    const countryName = params.country;
    const [countrydata, setcountrydata] = useState({});
    const [notfound, setnotfound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const location =useLocation()
    const {state}=location
    console.log(state);
    
let timer;
async  function updatecountrydata(data){
    const borders = data.borders ? 
    await Promise.all(data.borders.map(async (border) => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
        const [countryData] = await response.json();
        return countryData.name.common;
    })) 
    : [];

setcountrydata({
    name: data.name.common,
    image: data.flags.svg,
    nativename: Object.values(data.name.nativeName)[0].official,
    population: data.population.toLocaleString('en-IN'),
    region: data.region,
    subregion: data.subregion,
    capital: data.capital ? data.capital[0] : 'N/A',
    tld: data.tld.join(', '),
    currencies: data.currencies ? Object.values(data.currencies)[0].name : 'N/A',
    languages: data.languages ? Object.values(data.languages).join(', ') : 'N/A',
    borders: borders // set borders directly
});
}
    useEffect(() => {
         timer=setTimeout(() => {
            setIsLoading(false);
        }, 500); // Start loading state
        // console.log(timer);
        setIsLoading(true)
     if(state){
        updatecountrydata(state)
        return;
     }
        const fetchCountryData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                if (!response.ok) {
                    throw new Error('Country not found'); // Handle HTTP errors
                }
                const [data] = await response.json();

              updatecountrydata(data)
            } catch (error) {
                console.error('Error fetching country data:', error);
                setnotfound(true); // Set country not found flag
            } 

        };

      
        fetchCountryData();
        return () => clearTimeout(timer);
    }, [countryName]);

// console.log(timer);
    if (notfound) {
        // Display "Country Not Found" message
        return (
            <main>
                <span onClick={() => window.history.back()} style={{display:"block",padding:"27px"}} >
                    <div className="back-button">
                        <img src={imageurl} alt="Back" />
                        <span>Back</span>
                    </div>
                </span>
                <h1>Country Not Found</h1>
            </main>
        );
    }

    if (isLoading) {
        // Display shimmer effect or loading state
        return (
            <main>
                <span onClick={() => window.history.back()} style={{display:"block",padding:"27px"}}>
                    <div className="back-button">
                        <img src={imageurl} alt="Back" />
                        <span>Back</span>
                    </div>
                </span>
                <div className="country-info">
                    <div className="flag">
                        <img className="flagimage" src="" alt="Loading..." />
                    </div>
                    <div className="country-demography">
                        <h1 className="country-name">Loading...</h1>
                        <h5>Native Name: <span>Loading...</span></h5>
                        <h5>Population: <span>Loading...</span></h5>
                        <h5>Region: <span>Loading...</span></h5>
                        <h5>Sub Region: <span>Loading...</span></h5>
                        <h5>Capital: <span>Loading...</span></h5>
                    </div>
                    <div className="TCL">
                        <h5>Top Level Domain: <span>Loading...</span></h5>
                        <h5>Currencies: <span>Loading...</span></h5>
                        <h5>Languages: <span>Loading...</span></h5>
                    </div>
                    <div className="border-countries">
                        <h5>Border countries: N/A</h5> {/* Display 'N/A' explicitly */}
                    </div>
                </div>
            </main>
        );
    }
    // Display country details if found

    return (
        <main style={{ backgroundColor: mode ? "rgb(25,39,52)" : "white" }} >
            <span onClick={() => window.history.back()} style={{display:"block",padding:"27px"}}>
                <div className="back-button">
                    <img src={imageurl} alt="Back" />
                    <span>Back</span>
                </div>
            </span>
            <div className="country-info">
                <div className="flag">
                    <img className="flagimage" src={countrydata.image} alt={`${countrydata.name} flag`} />
                </div>
                <div className="country-demography">
                    <h1 className="country-name">{countrydata.name}</h1>
                    <h5>Native Name: <span>{countrydata.nativename}</span></h5>
                    <h5>Population: <span>{countrydata.population}</span></h5>
                    <h5>Region: <span>{countrydata.region}</span></h5>
                    <h5>Sub Region: <span>{countrydata.subregion}</span></h5>
                    <h5>Capital: <span>{countrydata.capital}</span></h5>
                </div>
                <div className="TCL">
                    <h5>Top Level Domain: <span>{countrydata.tld}</span></h5>
                    <h5>Currencies: <span>{countrydata.currencies}</span></h5>
                    <h5>Languages: <span>{countrydata.languages}</span></h5>
                </div>
                <div className="border-countries">
                    <h5>Border countries:</h5>
                    <div className="border-countries-list">
                        {Array.isArray(countrydata.borders) && countrydata.borders.length > 0 ? (
                            countrydata.borders.map((borderCountry, index) => (
                                <span key={index}><Link to={`/${borderCountry}`}>{borderCountry}</Link></span>
                            ))
                        ) : (
                            <span>N/A</span>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

