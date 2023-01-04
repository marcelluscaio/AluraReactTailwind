const Header = () => {
   return(
      <div className="flex h-20 bg-gray-400 justify-between items-center px-5">
         <span className="text-gray-100">Oi, internauta</span>
         <h1 className="text-gray-100 text-xl">Newsletter</h1>
         <input className="hidden sm:block" type="checkbox"/>
      </div>
   )
}

export default Header;