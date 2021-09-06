import React from "react";

let Users = (props) => {
    return <div>
        {
            props.users.map( u => <div key = {u.id}>
                <span>
                    <div>
                        <img src=""></img>
                    </div>
                    <div>
                        <button>Подписаться</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;