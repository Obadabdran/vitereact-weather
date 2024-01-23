import logo from '../assets/pngtree-cloud-vector-icon-with-transparent-background-png-image_1836020.jpg'

const Header = () => {
  return (
    <div className="bg-slate-700 py-3 flex flex-row ">
        <img src={logo} alt='' className='w-10 ml-8 rounded-md'/>
      <h2 className="font-light ml-4 mt-2 text-white">WeatherNow</h2>
      
    </div>
  )
}

export default Header