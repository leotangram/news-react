import React from 'react'
import Article from './Article'

const NewsList = ({ news }) => (
  <div className='row'>
    {news.map(article => (
      <Article key={article.url} article={article} />
    ))}
  </div>
)

export default NewsList
