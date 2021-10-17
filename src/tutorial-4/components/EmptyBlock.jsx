import '../App.css'
let EmptyBlock = () => {
  return (
    <div className="block empty-block">
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/204/824/non_2x/ghost-png.png"
        width="32px"
        height="32px"
        alt="Ghost"
      />
      <h2>Список фраз пустой</h2>
      <p>
        Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку
        “Сгенерировать”
      </p>
    </div>
  )
}

export default EmptyBlock
