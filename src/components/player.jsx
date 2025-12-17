import { use } from 'react';
import {useState} from 'react';

export default function Player({intialName,symbol,isActive}) {
   const [isEditing, setIsEditing] =  useState(false);
  const [PlayerName, setPlayerName] =  useState(intialName);

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
    
    setIsEditing
  }

   function handleEditClicked(){
    setIsEditing( (editing) => !isEditing)
    
   }

   let editablePlayerName = <span className="player-name">{PlayerName} </span>
  //  let btnCaption = 'Edit';
   if (isEditing === true) {
    editablePlayerName = <input type='text' required value={PlayerName} onChange={handleChange}/>
    // btnCaption = 'Save';
   }

    return <li className={isActive ? 'active' : undefined}>
            <span className="player">

              {editablePlayerName}

              <span className="player-symbol">{symbol}</span>

            </span>
            
            <button onClick={handleEditClicked}>{isEditing ? 'Save' : 'Edit'}</button>

          </li>

};