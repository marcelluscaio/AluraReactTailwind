import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';


const Header = () => {
   const toggleTheme = () => {
      document.documentElement.classList.toggle("dark");
   }

   useEffect(() => 
      {if(window.matchMedia('(prefers-color-scheme: dark)').matches){
         document.documentElement.classList.add("dark")
      }
   }, []);   

   return(
      <div className="flex h-20 bg-gray-400 justify-between items-center px-5">
         <span className="text-gray-100">Oi, internauta</span>
         <h1 className="text-gray-100 text-xl">Newsletter</h1>
         {/* <input className="hidden sm:block" type="checkbox"/> */}
         <MoonIcon className="h-8 text-gray-100 block cursor-pointer dark:hidden" onClick={toggleTheme}/>
         <SunIcon className="h-8 text-gray-100 hidden cursor-pointer dark:block" onClick={toggleTheme} />
      </div>
   )
}

export default Header;