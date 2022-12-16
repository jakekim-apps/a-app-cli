import initialState from "./initialState";
import  * as types from "../actions/types";
import {DecodedJwt} from "../components/auth/models/DecodedJwt.interface";
import jwt_decode from "jwt-decode";

export function auth(state = initialState.user, action: any) {
    switch (action.type) {
        case types.auth.REGISTER_SUCCESS:
            return {
                ...state
            };
        case types.auth.LOGIN_SUCCESS:
            const { token } = action.payload;
            const decodedJwt: DecodedJwt = jwt_decode(token);
            const user = decodedJwt.user
            return {
                ...state,
                email: user.email,
                name: user.name,
                phone: user.phone,
                token: token
            };
        case types.auth.LOGOUT_SUCCESS:
            return initialState.user;
        default:
            return state;
    }
}
