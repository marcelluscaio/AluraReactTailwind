import data from '../../../articles.json';
import Article from '../Article/Article'

const ArticlesList = () => {
   return(
      <div className='mt-5 grid gap-5 m-auto max-w-[85%] sm:grid-cols-2 lg:grid-cols-3'>
         {data.map((article, key) => <Article key={key}
            title = {article.title}
            text = {article.text}
            tags = {article.tags}
         />)}
      </div>
   )
}

export default ArticlesList