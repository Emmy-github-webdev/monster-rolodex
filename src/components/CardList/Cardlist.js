import React from 'react';
import Card from './card/Card';
import './cardlist.css'

const Cardlist = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
     <Card key={monster.id} monster={monster}/>
    ))}
  </div>
)

export default Cardlist;