import *as axios from "axios";
import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.png";

class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>
        {
            this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !=null ? u.photos.small : userPhoto } className={styles.userPhoto} alt="avatar" />
                    </div>
                    <div>
                        { u.followed 
                        ? <button onClick = { () => {this.props.unfollow(u.id)} } >Отписаться</button> 
                        : <button onClick = { () => {this.props.follow(u.id)}} >Подписаться</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    }
}

export default Users;