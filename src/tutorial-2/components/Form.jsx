let Form = () => {
    let email = ''
    let password = ''
    let handleChangeInputs = (event) => {
        if (event.target.name === 'email') {
            email = event.target.value
        } else {
            password = event.target.value
        }
    }
    let handleSubmit = (event) => {
        event.preventDefault()
        if (!email || !password) {
            alert('Пожалуйста, заполните все поля!')
        } else {
            console.log({email, password})
        }
        event.target.reset()
    }
    return <form onSubmit={handleSubmit}>
        <input onChange={handleChangeInputs} type='email' placeholder='email' name='email'/>
        <input onChange={handleChangeInputs} type='password' placeholder='password' name='password'/>
        <button type="submit">Войти</button>
    </form>
}

export default Form