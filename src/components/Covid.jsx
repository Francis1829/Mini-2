import React, { useEffect, useState } from "react";
import axios from "axios";

function covid() {
  const [data, setData] = useState([]);
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "51348a2d3cmsh25d052355fe6ca7p148057jsn6e524f6af76f",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .get(
        "https://covid-193.p.rapidapi.com/statistics?country=Philippines",
        options
      )
      .then((res) => {
        const responseData = res.data.response[0];
        setData(responseData);
        setCases(responseData.cases);
        setDeaths(responseData.deaths);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="lg:flex justify-center p-4 font-[Roboto]">
        <div className="container">
          <div className="card bg-white rounded p-3 shadow-md">
            <div className="text-black text-[20px] font-bold">
              Nationwide Cases Data
            </div>
            <div className="lg:flex block justify-center items-center">
              {data && (
                <>
                  <div className="bg-theme-color lg:p-3 p-2 rounded text-white m-4 lg:w-96 w-auto h-auto">
                    <div className="lg:text-xl text-lg">
                      {data.country}
                    </div>
                    <div className="md:text-lg">Population: {data.population}</div>
                    <div className="md:text-sm">Time: {data.time}</div>
                  </div>
                  {cases && (
                    <div className="bg-[#2a5e50] lg:p-3 p-2 rounded text-white m-4  lg:w-80 w-auto h-auto">
                      <div className="lg:text-xl text-lg">Total Cases</div>
                      <div className="md:text-lg"> {cases.total}</div>
                      <div className="md:text-sm text-theme-color">
                        {cases.new}
                      </div>
                    </div>
                  )}
                  <div className="bg-[#53818d] lg:p-3 p-2 rounded text-white m-4  lg:w-80 w-auto h-auto" >
                    <div className="lg:text-xl text-lg">Active Cases</div>
                    <div className="md:text-lg"> {cases.active}</div>
                  </div>

                  <div className="bg-[#509f83] lg:p-3 p-2 rounded text-white m-4  lg:w-80 w-auto h-auto">
                    <div className="lg:text-xl text-lg">Recovered</div>
                    <div className="md:text-lg"> {cases.recovered}</div>
                  </div>
                  {deaths && (

                    <div className="bg-[#444444] lg:p-3 p-2 rounded text-white m-4  lg:w-80 w-auto h-auto">
                    <div className="lg:text-xl text-lg">Died</div>
                    <div className="md:text-lg"> {deaths.total}</div>
                  </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default covid;

// {data && (
//   <div>
//     <p>{data.country}</p>
//     <p>Country: {data.population}</p>
//     <p>Country: {data.time}</p>
//   </div>
// )}
// {cases && (
//     <div>
//       <p>Cases Total: {cases.total}</p>
//       <p>Cases New: {cases.new}</p>
//       <p>Cases New: {cases.active}</p>
//     </div>
//   )}
//   {deaths && (
//     <div>
//       <p>Death Total: {deaths.total}</p>
//     </div>
//   )}

// {cases && (
//   <p>Cases New: {cases.new}</p>
//    )}
