import { useEffect, useState } from "react"
import { useGetCurrentWeatherQuery } from "../services/CurrentWeatherApi"
import pic_01 from '../assets/754749.jpg'


import { DateTime } from "luxon"


const Hero = () => {
  const [Wethdata,setWethdata]=useState()
  const [city,setCity]=useState("london")
  const [fetching,setFetching]=useState()
  

  const {data,isFetching}=useGetCurrentWeatherQuery({city:city})
 
 
  useEffect(()=>{
    
   
  
  {data&& setWethdata(data)}
  setFetching(isFetching)
  
  },[data])


  

  


  
  const formatToLocalTime=(secs,zone,format)=>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
    



console.log(fetching)
    
   
  return (
    <div className="relative " > 
     <img src={pic_01} alt="" className="w-full h-[800px] md:h-[570px]"/>
    <div className="absolute top-20 left-20 md:left-44  w-2/3   text-center   ">
      <div>
        <label className="md:text-lg  text-sm  ">Enter City:
          <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} className="border border-slate-200 rounded-lg ml-1 px-2 "/>
       
        </label>
        
      </div>
      
      {!fetching&&
      Wethdata? <>
        <div className=" rounded-b-lg font-serif mt-6">
          <h2>{formatToLocalTime(Wethdata.dt,'America/New_York','cccc,dd LLL yyyy,hh:mm a')}</h2>
        <h2 className="mb-20 mt-12 text-6xl md:text-9xl text-slate-800 "> {city}</h2>
    {city&&  <div className="flex flex-col md:flex-row md:space-x-20 space-y-2 ml-12 md:ml-12  mt-12">
        <div className=" w-5/6 md:w-1/3   py-8 space-y-2 bg-slate-600 text-white rounded-3xl">
          <h2>temp: {Wethdata.main.temp}</h2>
          <h2>max-temp: {Wethdata.main.temp_max}</h2>
          <h2>min-temp: {Wethdata.main.temp_min}</h2>
        </div>
        <div className="w-5/6 md:w-1/3   py-8 space-y-2 bg-slate-600 text-white rounded-3xl ">
          <h2>humidity: {Wethdata.main.humidity}</h2>
          <h2>pressure: {Wethdata.main.pressure}</h2>
          <h2>wind-speed: {Wethdata.wind.speed}</h2>
        </div>
        <div className="w-5/6 md:w-1/3   py-8 space-y-2 bg-slate-600 text-white rounded-3xl ">
          <h2>timezone: {Wethdata.timezone}</h2>
          <h2>visibility: {Wethdata.visibility}</h2>
        </div>
      </div>}
      
        
      </div>
      
      </>:"isFetching..."}
      
      
      
      
      
    </div>
    </div>
  )
}

export default Hero