import { useState } from 'react';

import Header from './components/Header/Header';
import ArticlesList from './components/ArticleList/ArticleList';
import Form from './components/Form/Form'

const App = () => {
  const [user, setUser] = useState();
  
  return(
    <>
      <Header/>
      {user && <ArticlesList/>}
      {user || <Form />}
    </>
  )
}

export default App
