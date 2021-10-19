import React from 'react'

const Phrase = ({ phrase }) => {
  return (
    <div className="list">
      <div className="block">
        <h3>{phrase}</h3>
      </div>
    </div>
  )
}

export default Phrase
