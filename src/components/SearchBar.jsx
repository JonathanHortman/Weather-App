import React, { useState } from "react";
import s from '../StyleSheets/SearchBar.module.css'
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <div className={`${s.searchContainer}`}>

        <Link to={'/'}>
          <img className={s.sol} src="https://www.iconpacks.net/icons/2/free-sun-icon-3337-thumb.png" alt="iconpage" />
        </Link>

        <input
          className={`${s.searchBar}`}
          type="text"
          placeholder="Search country or city..."
          value={city}
          onChange={e => setCity(e.target.value)} />

        <input
        className={s.searchButton}
          type="submit"
          value="🔎" />

      </div>

    </form>
  );
}

