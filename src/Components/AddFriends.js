import React from 'react'
import './AddFriends.css'
import { useState } from 'react'

function AddFriends({ friendName, setFriendName }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const addHandler = () => {
    const frnd = [...friendName]
    frnd.push({
      name: name,
      image: image
    })
    setFriendName(frnd)
    setName('');
    setImage('');
  }


  return (
    <div className='addFriends'>
      <div>
        <label className='label'>
          Friend Name
          <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label className='label'>
          Image URL
          <input type='text' placeholder='Enter URL' value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
      </div>
      <button className='addBtn' onClick={addHandler}>Add</button>
    </div>
  )
}

export default AddFriends
