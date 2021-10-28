import React from 'react'

const App = () => {
  const [users, setUsers] = React.useState([])
  const getUsers = async () => {
    try {
      let response = await fetch(
        'https://61795c43aa7f3400174049f4.mockapi.io/uss'
      )
      if (response.ok) {
        let users = await response.json()
        setUsers(users)
      } else {
        throw new Error('Некорректный запрос!')
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Сгенерировать пользователей</button>
    </div>
  )
}
export default App
