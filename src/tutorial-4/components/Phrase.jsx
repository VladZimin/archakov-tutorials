import React from 'react'

const Phrase = ({ phrasesArray }) => {
  return (
    <div className="list">
      {phrasesArray.map((phrase, index) => (
        <div key={index} className="block">
          <h3>{phrase}</h3>
        </div>
      ))}
    </div>
  )
}

export default Phrase
