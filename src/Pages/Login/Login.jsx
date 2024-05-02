import React from "react";
import loginImg from "../../assets/login.svg"
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const {signIn} = useAuth();


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }


  return (
    <div className="flex justify-center gap-6">
      <div className="flex-1">
        <img src={loginImg} alt="" />
      </div>
      <div className="flex-1">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
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
              required
            />
            <div>
                <p>New Membar Yet? <Link className="text-red-600 underline" to={"/signup"}>Sign Up</Link></p>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
