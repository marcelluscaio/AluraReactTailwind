const Article = ({title, text, tags}) => {
   return(
      <article className="p-5 bg-gray-200 dark:bg-dark-200 rounded-xl shadow-md flex flex-col items-center gap-4">
         
         <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
         <div className="self-end">
            {tags.map((tag, key) => {return <span key={key} className="bg-alura-100 dark:bg-dark-100 rounded-full text-white px-4 py-2 mr-2 uppercase text-xs">{tag}</span>})}
         </div>
         <p className="dark:text-white">{text}</p>
      </article>
   )
}

export default Article