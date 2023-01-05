import data from '../../../articles.json';

const ArticlesList = () => {
   return(
      <div className='mt-5 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3'>
         {data.map(article => <p>{article.title}</p>)}
      </div>
   )
}

export default ArticlesList