import React from 'react'
import axios from 'axios'

const userObj = {
  fullName: '',
  email: '',
}

const App = () => {
  const [users, setUsers] = React.useState([])
  const [formValues, setFormValues] = React.useState({})
  const inputRef = React.useRef()
  console.log(inputRef)
  const handleChangeInputs = (event) => {
    const { name, value } = event.target
    userObj[name] = value.trim()
    setFormValues({ ...userObj })
    console.log(formValues)
  }
  const handleCreateUser = async () => {
    await axios.post(
      'https://61795c43aa7f3400174049f4.mockapi.io/users',
      formValues
    )
  }
  const uploadFile = () => {
    const file = inputRef.current.files[0]
    console.log(file)
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:9999', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
  const getUsers = async () => {
    try {
      let { data } = await axios.get(
        'https://61795c43aa7f3400174049f4.mockapi.io/users'
      )
      if (data) {
        setUsers(data)
      } else {
        throw new Error('Некорректный запрос!')
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <div>
        <ul>
          {users.map((obj) => (
            <li key={obj.id}>{obj.fullName}</li>
          ))}
        </ul>
        <button onClick={getUsers}>Сгенерировать пользователей</button>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h4>Создать пользователя</h4>
        <input onChange={handleChangeInputs} name="fullName" type="text" />
        <input onChange={handleChangeInputs} name="email" type="text" />
        <button onClick={handleCreateUser}>Отправить</button>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h4>Загрузить файл</h4>
        <input ref={inputRef} type="file" />
        <button onClick={uploadFile}>Загрузить</button>
      </div>
    </div>
  )
}
export default App
