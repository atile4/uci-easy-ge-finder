import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const [error, setError] = useState<string | null>(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()

	const logout = async () => {
    setError(null)
    setIsPending(true)

		try {
    	await signOut(auth)
			console.log("logging out")
    	dispatch({type: "LOGOUT"})

    	}
    	catch (err : any) {
      	console.log(err.message)
    	}
			finally {
				setIsPending(false)
			}
	}
	return { logout, error, isPending }

}