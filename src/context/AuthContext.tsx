import { createContext, useReducer, ReactNode, useEffect } from "react";
import { auth } from "../firebase/config";
import { User } from "firebase/auth"


type AuthState = {
  user: User | null
  authIsReady: boolean
}

type AuthAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "AUTH_IS_READY"; payload: User | null }

type AuthContextType = AuthState & {
  dispatch: React.Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    case "AUTH_IS_READY":
      return {
        user: action.payload,
        authIsReady: true,
      }
    default:
      return state
  }
}

type Props = {
  children: ReactNode
}


export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user })
      unsub()
    })

    return () => unsub()
  }, [])

  console.log("AuthContext state:", state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}



