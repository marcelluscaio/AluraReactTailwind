import { useState } from 'react';

import Header from './components/Header/Header';
import ArticlesList from './components/ArticleList/ArticleList';
import Form from './components/Form/Form'

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  
  return(
    <div className="h-screen">
      <Header user={user}/>
      {hasUser && <ArticlesList/>}
      {hasUser || <Form setUser={setUser} />}
    </div>
  )
}

export default App
