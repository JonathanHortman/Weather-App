import React, { useState } from "react";
import s from '../StyleSheets/SearchBar.module.css'
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div className={`${s.searchContainer}`}>


        <input
          className={`${s.input}`}
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)} />

        <input
          type="button" class="btn btn-success"
          value="Search 🔎" />
          
        <div className={`${s.home}`}>
          <button type="button" class="btn btn-light">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              🏠 Home
            </Link>
          </button>
        </div>

      </div>
    </form>
  );
}

