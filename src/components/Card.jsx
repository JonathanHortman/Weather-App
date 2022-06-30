import React from 'react';
import s from '../StyleSheets/Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ max, min, name, img, onClose, id }) {
  console.log(max)
  return (
    
    <div lassName={`${s.containerCardContainer}`}>
      <div className={`${max<6? s.contenedorCardIce : max<16 ? s.contenedorCardCold : max<26 ? s.contenedorCardSprint : s.contenedorCardSummer}`}>

          <div className={`${s.botonX}`}>
            <button
              className={`${s.x}`}
              onClick={onClose}>
              X
            </button>
          </div>
        <Link to={`/ciudad/${id}`} style={{ textDecoration: 'none' }}>

          <div className={`${s.contenedorTexto}`}>
            <p className={`${s.ciudad}`}><strong>{name}</strong></p>
            <div className={`${s.climas}`}>
              <p>Min: <strong>{min}</strong>°</p>
              <p>Max: <strong>{max}</strong>°</p>
            </div>
          </div>
        </Link>

        <div className={`${s.imagenClima}`}>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="imagen del clima"
          />
        </div>



      </div>

    </div>
  )
};