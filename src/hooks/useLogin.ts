import { useState } from "react"
import { signInWithPopup, AuthProvider } from "firebase/auth"
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const [error, setError] = useState<string | null>(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()


	const login = async (provider : AuthProvider): Promise<void> => {
    setError(null)
    setIsPending(true)

		try {
    	const result = await signInWithPopup(auth, provider)
    	const user = result.user
      
			if (!result) {
				throw new Error("Login failed.")
			}

			dispatch({ type: "LOGIN", payload: result.user})
			setIsPending(false)

    	// const credential = GoogleAuthProvider.credentialFromResult(result);
    	// const token = credential?.accessToken;
    	console.log(`Welcome ${user.displayName}`)

    	}
    	catch (err : any) {
      	console.log(err.message)
    	}
			finally {
				setIsPending(false)
			}
	}
	return { login, error, isPending }

}