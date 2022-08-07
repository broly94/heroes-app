import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

export const AuthProvider = ({ children }) => {

    const init = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      return {
        logged: !!user,
        user
      }
    }

    const [ state, dispatch ] = useReducer(authReducer, {}, init);

    const login = (name = '') => {

      const user = { id: 1, name };

      const action = {
        type: types.Login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify(user));

      dispatch(action)
    }

    const logout = () => {
      localStorage.removeItem('user');
      dispatch({ type: types.Logout })
    }

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
