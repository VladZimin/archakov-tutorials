import ProfileClass from './components/ProfileClass'
import ProfileFunc from './components/ProfileFunc'

let App = () => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    const registredDate = new Date(2021, 5, 22).toLocaleString('ru', options)
    return <>
        <ProfileClass name='Вася Пупкин' registredAt={registredDate}/>
        <ProfileFunc name='Вася Пупкин' registredAt={registredDate}/>
    </>
}

export default App