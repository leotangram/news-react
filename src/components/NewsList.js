import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

const NewsList = ({ news }) => (
  <div className='row'>
    {news.map(article => (
      <Article key={article.url} article={article} />
    ))}
  </div>
)

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewsList
