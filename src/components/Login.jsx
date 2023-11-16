import { useEffect, useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "boxicons";
import Logo from "./img/Logo2.png";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate()
  const [userid, setUserid] = useState({
    email: "",
    password: "",
    remember: "",
  });

  const [errorM, setErrorM] = useState({});


  const handleChamge = (e) => {
    let users = userid;

    if (e.target.id === "remember") {
      users[e.target.id] = e.target.checked;
    } else {
      users[e.target.id] = e.target.value;
    }
    setUserid(users);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setErrorM(validate(userid));
    const temp = JSON.parse(localStorage.getItem("data"));
    if (temp.email === userid.email && temp.password === userid.password) {
      Swal.fire({
        icon:'success',
        title:`Welcome, ${temp.username}!`,
      confirmButtonColor: '#f0cb6e'}).then((result) => {
        if (result.isConfirmed) { 
         navigate ("/")
         }
      })
    } else {
      Swal.fire({
        icon:'error',
        title:'Email or Password is incorrect !',
      confirmButtonColor: '#f0cb6e'})
    }
  };

  const validate = (values) => {
    const errors = {};
    const emex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emex.test(values.email)) {
      errors.email = "This email is not valid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.quotable.io/quotes/random?minLength=100&maxLength=140")
      .then((response) => {
        setItem(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="flex h-screen w-full lg:justify-start items-center bg-white">
        <div className="form text-black flex justify-center lg:w-auto  w-full items-center h-full lg:px-20 bg-[#f8f9fa] shadow-lg bg-scale-200 border-scale-500">
          <div className="login flex flex-col justify-center items-center rounded-[16px] py-9 ">
            <div className="absolute top-5 left-3">
                <img src={Logo} alt="" width={150} />
            </div>
            <div className="welcome text-start text-[36px] font-semibold">
              Welcome back
            </div>
            <span className="text-sm text-black opacity-80 ml-3">
              Sign in to your account
            </span>
            <form
              className="input-group flex flex-col justify-center items-center mt-9"
              onSubmit={submitLogin}
            >
              <div className="inputs flex flex-col w-80 m-2 h-[70px]">
                <label htmlFor="#">Email</label>
                <input
                  name="email"
                  id="email"
                  placeholder="sample@gmail.com"
                  className="block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2 mt-2"
                  onChange={handleChamge}
                />
                <span className="text-[#cf1c13]">{errorM.email}</span>
              </div>

              <div className="inputs flex flex-col w-80 m-2 h-[70px]">
                <label htmlFor="#">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••••"
                  className="mt-2 block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2"
                  onChange={handleChamge}
                />
                <span className="text-[#cf1c13]">{errorM.password}</span>
              </div>

              <div className="text-start w-full my-5">
                <div className="remembertext-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mx-2"
                    onChange={handleChamge}
                  />
                  <label htmlFor="#"> Remember me.</label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-t-hover hover:bg-theme-color ease-in-out duration-300 text-white font-[Roboto] text-center p-2 flex justify-center items-center w-80 rounded-lg text-[18px]"
                id="login"
              >
                Sign In
              </button>
              <div className="mx-8 text-sm text-color mt-5">
                Don't have an Account?{" "}
                <Link to="/Dashboard/Register" className="underline">
                  Sign Up Now
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="relative h-full w-full lg:flex hidden flex-col justify-center items-center">
          <div className="cards w-[40rem] h-80 flex flex-col p-5 rounded-xl shadow-md justify-center">
            {loading ? (
             <PulseLoader
             color="#c9aa5b"
             cssOverride={{
               Display: 'flex',
               justifyContent: 'center'
             }}
             loading
           />
            ) : (
              item.map((data, i) => (
                <>
                <div className="quote text-center text-[40px] tracking-wider font-semibold font-[Agency] text-[#c9aa5b]">QUOTE OF THE DAY</div>
                <div
                  key={i}
                  className="card-quote text-center text-xl m-5 font-simebold"
                >
                  <box-icon type="solid" name="quote-left" color="#c9aa5b" />
                  <span className="m-5">{data.content}</span>
                  <box-icon type="solid" name="quote-right" color="#c9aa5b" />
                  <div className="author text-end mr-10 mt-10 text-md">
                    ---<span className="ml-2">{data.author}</span>
                  </div>
                </div>
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
