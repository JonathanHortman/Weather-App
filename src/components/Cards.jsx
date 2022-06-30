import React from 'react';
import Card from './Card';
import s from '../StyleSheets/Cards.module.css';

export default function Cards({ cities, onClose }) {
  return (
      <div className={`${s.contenedorCards}`}>
        {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        />)}
      </div>
  )
};