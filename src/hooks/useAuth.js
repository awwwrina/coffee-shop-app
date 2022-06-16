// import { useSelector } from "react-redux";

// export const useAuth = () => {
//     const {email, token, name} = useSelector(state => state.user);
//     return {
//         isAuth: !!email,
//         email,
//         token,
//         name
//     };
// }

import {useContext} from 'react';
import { AuthContext } from '../components/hoc/AuthProvider';

export const useAuth = () => {
    return useContext(AuthContext);
}