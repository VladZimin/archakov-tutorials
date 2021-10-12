import style from './Profile.module.css'

let ProfileClass = props => {
    return <div className={style.profileBlock}>
        <h3 style={{fontWeight: 'normal'}}>Привет, <b>{props.name.slice(0, 4)}!</b></h3>
        <p> Дата регистрации: 22 июня 2021</p>
    </div>
}

export default ProfileClass