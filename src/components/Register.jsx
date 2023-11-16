import React, { useState, useEffect } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import "boxicons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from './img/Logo2.png'
import Swal from "sweetalert2";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errorM, setErrorM] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate()

  const Loginsubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length === 0) {
      Swal.fire({
        icon: 'success',
        title:'Success!',
      confirmButtonColor: '#f0cb6e'})
      .then((result) => {
        if (result.isConfirmed) { 
          navigate("/Dashboard/Login")
         }
      })
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      setErrorM(validationErrors);
    }
  };
  

  const validate = (values) => {
    const errors = {};
    const emex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Username should not be empty";
    }
    if (!values.email) {
      errors.email = "Email shoud not be empty";
    } else if (!emex.test(values.email)) {
      errors.email = "This email is not valid";
    }
    if (!values.password.length > 0) {
      errors.password = "Password should not be empty";
    } else if (values.password.length < 8) {
      errors.password = "Password cannot be less than 8 characters";
    }
    if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Password do not match";
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
      <div className="w-full h-screen flex lg:justify-start  items-center bg-white">
        <div className="cards h-full lg:w-auto  w-full flex flex-col justify-center bg-[#f8f9fa] lg:px-20 shadow-lg bg-scale-200 border-scale-500 pt-10  ">
        <div className="login flex flex-col justify-center items-center rounded-[16px] py-9 ">
        <div className="absolute top-5 left-3">
                <img src={Logo} alt="" width={150} />
                <div className=" ml-2 lg:text-2xl text-lg font-[Agency]">Your Tech Wonderland</div>
            </div>
          <div className="text-[36px] text-start font-semibold">
            <h1>Get Started</h1>
          </div>
          <span className="text-sm text-black opacity-80 ml-3">Create a new account</span>
          <div className="form text-black">
            <form className="flex flex-col justify-center items-center mt-5" onSubmit={Loginsubmit}>
              <div className="flex flex-col w-80 m-2 h-[70px]">
                <label className="">Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2 mt-2"
                  placeholder="Username"
                  onChange={handleChange}/>
                <span className="text-[#cf1c13]">{errorM.username}</span>
              </div>
              
              <div className="flex flex-col w-80 m-2 h-[70px]">
                <label className="w-[150px]">Email:</label>
                <input
                  type="text"
                  placeholder="Sample@gmail.com"
                  name="email"
                  id="email"
                  className="block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2 mt-2"
                  onChange={handleChange}
                />
                <span className="text-[#cf1c13]">{errorM.email}</span>
              </div>
              <div className="flex flex-col w-80 m-2 h-[70px]">
                <label className="w-[150px]">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2 mt-2"
                  placeholder="••••••••••"
                  onChange={handleChange}/>
                  <span className="text-[#cf1c13]">{errorM.password}</span>
              </div>
              <div className="flex flex-col w-80 m-2 h-[70px]">
                <label className="w-[150px]">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  className="block box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2 mt-2"
                  placeholder="••••••••••"
                  onChange={handleChange}/>
                  <span className="text-[#cf1c13]">{errorM.confirmpassword}</span>
              </div>
              <div className="btnn flex justify-around items-center w-full">
                <button
                  type="submit"
                  className="bg-t-hover hover:bg-theme-color ease-in-out duration-300 text-center p-2 flex justify-center items-center w-80 rounded-lg text-[18px] mt-4 text-white font-[Roboto] "
                >
                  Sign Up
                </button>
              </div>
              <div className="mx-8 text-sm text-color mt-5">
                   Have an Account? <Link to="/Dashboard/Login" className="underline">Sign In Now</Link>
                </div>
                
            </form>
            </div>
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

export default Register;
