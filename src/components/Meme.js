import React from 'react';
import memesData from '../memesData.js';

function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    {
      /* Shortcut acees to meme key */
    }
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    {
      /* Access a random index in the memesArray */
    }
    const url = memesArray[randomNumber].url;
    {
      /* Access the key of url in the memesArray and in a random index */
    }
    console.log(url);
  }
  return (
    <main>
      <div className='form-container'>
        <input type='text' placeholder='Top text' className='form-input' />
        <input type='text' placeholder='Bottom text' className='form-input' />
        <button onClick={getMemeImage} className='form-button'>
          Get a new meme image 🤖
        </button>
      </div>
    </main>
  );
}
export default Meme;
