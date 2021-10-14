import {Component} from "react"
import style from './Profile.module.css'

class ProfileClass extends Component {
    render() {
        return <div className={style.profileBlock}>
            <h3 style={{fontWeight: "normal"}}>
                Привет, <b>{this.props.name ? this.props.name.split(' ', 1) : 'Гость'}!</b></h3>
            <p> Дата регистрации: {this.props.registredAt}</p>
        </div>
    }
}

export default ProfileClass