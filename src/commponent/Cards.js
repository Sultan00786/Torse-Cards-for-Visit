import React, { useState } from 'react'

function Cards(props) {
    // console.log( props );

    const [isReadMore, setIsReadMore] = useState(false);

    const tour = props.tour;
    const info = tour.info;
    const description = `${ isReadMore === true ? info : info.substr( 0, 200 ) }... `;
    const notIntHandler = props.notIntHandler;
    const id = tour.id;

    // console.log(id);

    const readHandler = () =>{
        setIsReadMore( ! isReadMore );
    }


  return (

    <div className=' flex flex-col items-center static mb-20 p-2 bg-fellow-50 rounded-2xl border-fellow-50 hover:border-fellow-600 border-b-[5px] border-l-[5px] border-t-[1px] border-r-[1px] duration-200 ' >
        
        <div className=' w-full h-full ' >
            <img src={tour.image} className=' w-full h-[400px] rounded-lg ' ></img>
        </div>

        <div className=' w-full p-2 ' >

            <h2 className=' text-2xl mt-3 text-green-600 font-bold ' >
                <span>&#8377;</span> {tour.price}
            </h2>

            <h1 className=' text-3xl mt-1 font-bold ' >
                {tour.name}
            </h1>

            <p className=' font-semibold mt-1 mb-8 ' >
                {description} 
                <span 
                className=' text-blue-950 font-semibold cursor-default hover:font-bold ' 
                onClick={readHandler}
                >
                    read more
                </span>
            </p>
        </div>

        <div 
        className=' w-fit bg-fellow-400 text-black text-xl font-bold mb-4 px-20 py-2 border-fellow-400 border-[3px] rounded-full transition-all duration-200 hover:bg-fellow-50 hover:scale-90 cursor-pointer ' 
        onClick={()=>(
            notIntHandler( id )
        )}>

            Not Interest
        </div>

    </div>
  )
}

export default Cards