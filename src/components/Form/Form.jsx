const Form = ({setUser}) => {
   const safeSubmit = (e) => {
      e.preventDefault();
      const name = e.target[0].value;
      const password = e.target[1].value;
      setUser({name: name, password: password})
   }
   
   return(
      <form onSubmit={safeSubmit}>
         <input type="text"/>
         <input type="password"/>
         <button>Submit</button>
      </form>
   )
};

export default Form;