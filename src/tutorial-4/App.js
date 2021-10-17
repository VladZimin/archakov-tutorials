import React from 'react'
import './App.css'
import EmptyBlock from './components/EmptyBlock'
import Phrase from './components/Phrase'

let App = () => {
  let [phrasesArr, setPhrase] = React.useState([])

  const adjectivesArr = [
    'абсолютный',
    'адский',
    'азартный',
    'активный',
    'ангельский',
    'астрономический',
    'баснословный',
    'безбожный',
    'безбрежный',
    'безвозвратный',
    'безграничный',
    'бездонный',
    'бездушный',
    'безжалостный',
    'замечательно',
    'замечательный',
    'записной',
    'запредельный',
    'заядлый',
    'звериный',
    'зверский',
    'зеленый',
    'злой',
    'злостный',
    'значительный',
    'неоспоримый',
    'неотразимый',
    'неоценимый',
    'непередаваемый',
  ]
  const nounsArr = [
    'лгун',
    'день',
    'конь',
    'олень',
    'человек',
    'программист',
    'ребёнок',
    'конец',
    'город',
    'дурак',
  ]

  let adj1 = Math.floor(Math.random() * adjectivesArr.length)
  let adj2 = Math.floor(Math.random() * adjectivesArr.length)
  let randomAdjectives = adjectivesArr[adj1] + ' ' + adjectivesArr[adj2] + ' '

  let randomNoun = nounsArr[Math.floor(Math.random() * nounsArr.length)]
  let phrase = randomAdjectives + randomNoun

  let onGeneratePhrase = () => {
    setPhrase((prev) => [...prev, phrase])
  }
  let onRemovePhrases = () => {
    setPhrase([])
  }

  return (
    <div className="wrapper">
      {phrasesArr.length ? (
        <Phrase phrasesArray={phrasesArr} />
      ) : (
        <EmptyBlock />
      )}
      <button onClick={onGeneratePhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={onRemovePhrases} className="btn btn_clear">
        Очистить
      </button>
    </div>
  )
}

export default App
