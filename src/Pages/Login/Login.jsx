import React from "react";
import loginImg from "../../assets/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const Login = () => {
    const {signIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
           const loggedInUser = result.user;
           console.log(loggedInUser)
           const user = { email };
            

            //get access token
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
              console.log(res.data)
              if(res.data.success){
                navigate(location?.state ? location?.state : '/')
              }
            })

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
