import style from './Profile.module.css'

let ProfileFunc = props => {
    return <div className={style.profileBlock}>
        <h3 style={{fontWeight: 'normal'}}>
            Привет, <b>{props.name ? props.name.split(' ', 1) : 'Гость'}!</b></h3>
        <p> Дата регистрации: {props.registredAt}</p>
    </div>
}

export default ProfileFunc