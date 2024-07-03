import React, { useState, useEffect, useContext } from 'react';
import searchicon from '/assets/search-outline.svg';
import chevron from '/assets/chevron-down-outline.svg';
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Countrieslist from "./CountriesList";
import { ModeContext } from './modecontext';

export default function Home() {
  const { mode} = useContext(ModeContext); // Use the context

  const [countriesdata, setcountriesdata] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchedCountries, setsearchedCountries] = useState([]);
  const [mystyle, setstyle] = useState('none');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setcountriesdata(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching all countries:', error);
      }
    };

    fetchData();
  }, []);

  const change = () => {
    setstyle(mystyle === 'none' ? 'block' : 'none');
  };

  const search = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setFilteredCountries(searchedCountries.length !== 0 ? searchedCountries : countriesdata);
    } else {
      const filteredData = filteredCountries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm)
      );
      setFilteredCountries(filteredData);
    }
  };

  const filter = async (e) => {
    const searchTerm = e.target.innerText;
    if (searchTerm === "All Countries") {
      setFilteredCountries(countriesdata);
      setsearchedCountries(countriesdata);
    } else {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${searchTerm}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setFilteredCountries(data);
        setsearchedCountries(data);
      } catch (error) {
        console.error('Error fetching filtered countries:', error);
      }
    }
  };
  
 

  return (
    <main  style={{ backgroundColor: mode ? "rgb(25,39,52)" : "white" }}>
      <div className="filter-search-container" style={{ backgroundColor: mode ? "rgb(25,39,52)":"white"  }}>
        <SearchBar imageURL={searchicon} oninput={search} />
        <Filter mode={mode} imageURL={chevron} mystyle={mystyle} onclick={change} onchange={filter} />
      </div>
      <Countrieslist countries={filteredCountries} />
    </main>
  );
}
