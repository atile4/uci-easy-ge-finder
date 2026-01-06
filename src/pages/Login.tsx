import "../styles/Login.css";
import GoogleSigninButton from "../components/GoogleSigninButton";
import { useLogin } from "../hooks/useLogin";
import { googleProvider } from "../firebase/config";

export default function Login() {
  const { login, error, isPending } = useLogin();

  const handleClick = () => {
    login(googleProvider);
  };

  return (
    <div className="login-page">
      <div className="login">
        <h1 className="login-title">Welcome</h1>
        <p className="login-subtitle">Please login to continue</p>
        <GoogleSigninButton onClick={handleClick} />
      </div>
    </div>
  );
}
