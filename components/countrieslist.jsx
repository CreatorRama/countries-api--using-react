import Countrycard from "./countrycard";
import '../app.css';

export default function Countrieslist({countries}) {
  // console.log(scroll);
  const array = countries.map((country) => (
    <Countrycard
      key={country.name.common}
      name={country.name.common}
      flag={country.flags.svg}
      population={country.population.toLocaleString('en-IN')}
      capital={country.capital?.[0]}
      region={country.region}
      data={country}
      />
    ));
  return (
    <div className="countries-container">
      {array}
    </div>
  );
}
