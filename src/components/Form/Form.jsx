const Form = ({setUser}) => {
   const safeSubmit = (e) => {
      e.preventDefault();
      const name = e.target[0].value;
      const password = e.target[1].value;
      setUser({name: name, password: password})
   }

   const styles = "pl-5 py-1 border-2 border-alura-100 dark:border-white dark:bg-dark-100 dark:text-white rounded-full outline-none w-full max-w-2xl invalid:focus:border-red-400 caret-yellow-400"
   
   return(
      <form className="flex flex-col items-center gap-10 mt-40 mx-20 h-full" onSubmit={safeSubmit}>
         <input className={styles} required type="text"/>
         <input className={styles} required type="password"/>
         <button className="bg-alura-100 dark:bg-dark-200 text-white px-6 py-2 w-full rounded-full max-w-lg hover:animate-bounce">Submit</button>
      </form>
   )
};

export default Form;