import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.png";
import { NavLink } from "react-router-dom";
import *as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

        return <div>
            <div>
                {pages.map( (p) => {
                    return <span className = {props.currentPage === p && styles.selectedPage} 
                    onClick = {(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
                })}
            </div>

        {
            props.users.map( (u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to = {'/profile/' + u.id } >
                            <img src={u.photos.small !=null ? u.photos.small : userPhoto } className={styles.userPhoto} alt="avatar" />
                        </NavLink>
                    </div>
                    <div>
                        { u.followed 
                        ? <button onClick = { () => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ 
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '415510cc-fbfa-4dcf-b76e-6c4db7f8f5dc'
                                } 
                            })
                            .then(response => {
                                if (response.data.resultCode === 0 ) {
                                    props.follow(u.id);
                                }
                            });
                            props.unfollow(u.id)} } >Отписаться</button> 
                        : <button onClick = { () => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { 
                                withCredentials: true, 
                                headers: {
                                    'API-KEY': '415510cc-fbfa-4dcf-b76e-6c4db7f8f5dc'
                                } 
                            })
                            .then(response => {
                                if (response.data.resultCode === 0 ) {
                                    props.follow(u.id);
                                }
                            });
                            props.follow(u.id)}} >Подписаться</button> }
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

export default Users;