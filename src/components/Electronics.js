import React from 'react';
import { useState } from 'react';
import Card from './Card';
export default function Electronics(props) {

  return (
    <div className="container my-3 ">
      <h1 style={{textAlign:"center"}}>WELCOME TO ELECTRONICS</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
      {props.electronics.map((element, index) => (
        <div className="col-md-4" key={index}>
          <Card 
            name={element.name} 
            itemc={element.itemcategory} 
            image={element.imageitem} 
            desc={element.description}  
            email={element.email} 
            person={element.personname} 
            contact={element.contact} 
            address={element.address}
          />
        </div>
      ))}
    </div>
    </div>
  )
}
