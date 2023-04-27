import { useDispatch, useSelector } from "react-redux";
import {deleteUserAC} from

export const HomePage =()=>{
    const users = useSelector(state => state.users);
    const dispatch = useDispatch()

    return(
        <ul>
            {users.map(user => {
                return <li key={user.id}>
                    <p>Name: {users.name}</p>
                    <p>Age: {users.age}</p>
                    <button onClick={()=>{{dispatch (deleteUserAC(user.id))}}}>Delete</button>
                    </li>
                         })}
            
        </ul>
    )
}