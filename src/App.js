import React, { useState } from "react";
import Tours from "./commponent/Tours";
import data from "../src/data";

const App = () => {

  const [tourData, setTour] = useState(data);

  const notIntHandler = (id) => {

    console.log("hellow");

    const newTourData = tourData.filter( (tour) => {
      return ( id !== tour.id ? true: false );
    } );

    // console.log( newTourData )
    setTour(newTourData);

  }

  function refreshHandler (){

    setTour(data);

  }

  if( tourData.length === 0 ){

    return (

      <div className="bg-fellow-400 min-h-[100vh] flex flex-col items-center justify-center gap-6 font-ibm-plex-sans cursor-default " >
        <h2 className=" text-5xl font-bold -mt-20 " >No Tours Left</h2>
        <div 
        className="  w-fit bg-fellow-500 text-2xl font-bold px-5 rounded-xl py-2 border-fellow-600 border-b-[5px] border-l-[5px] border-t-[2px] border-r-[2px] hover:scale-95 duration-200 "
        onClick={refreshHandler} >
          Refresh
        </div>
      </div>

    )

  }

  return (
    <div className=" bg-fellow-400 min-h-[100vh] flex flex-col items-center font-ibm-plex-sans cursor-default " >

      <Tours data = {tourData} notIntHandler={notIntHandler} />

    </div>
  );
};

export default App;
