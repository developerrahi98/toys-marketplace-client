import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import image from "../../assets/images/depositphotos_1982796-stock-illustration-login-icon-button.jpg";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../FIrebase/firebase.config";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
        const googleUser = result.user;
    })
    .catch((error) => console.log(error));
  }
  return (
    <div className="hero min-h-screen bg-base-400">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <img src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGoogleLogin} className="btn btn-primary">
                  Continue with Google
                </button>
              </div>
            </form>
            <p>
              New to Supper Kiddo?{" "}
              <Link
                to="/signup"
                className="text-orange-600 font-bold text-center my-4"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
