import React from 'react'
import Cards from './Cards'

function Tours({data, notIntHandler}) {


  return (
    <div className=' w-11/12 mt-12 flex flex-col items-center' >
        <h1 className=' w-fit bg-fellow-500 text-5xl font-bold px-12 rounded-2xl py-4 pb-6 border-fellow-600 border-b-[7px] border-l-[7px] border-t-[2px] border-r-[2px] '>

            Tours For Visiting
        </h1>

        <div className=' grid grid-cols-3 justify-center gap-8 mt-12 ' >
            {
                data.map( (tours) =>{

                    const tour = { ...tours };
                    const id = tours.id;

                    return <Cards key={id} tour={tour} notIntHandler={notIntHandler} />
                } )
            }
        </div>

    </div>
  )
}

export default Tours