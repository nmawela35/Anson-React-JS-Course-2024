// import PropTypes from './prop-types'

import UserFavoriteFoods from "./UserFavoriteFoods";
import UserUsername from "./UserUsername";


export function UserProfile(props){
    props.callMe()

    console.log(props)
    return(
    <div id="user-profile">

        <UserUsername username={props.username}/>
        <b>Age:</b>
        <span>{props.age}</span>
        <UserFavoriteFoods/>

    </div>
    )

}
``
// UserProfile.propTypes ={
//     username: propTypes.string.i
// }