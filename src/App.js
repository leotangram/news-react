import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Form from './components/Form'

class App extends Component {
  state = {
    news: []
  }
  componentDidMount() {
    this.checkNews()
  }

  checkNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=5f57f9847d7f4b3ebdc9f00a582b78c6`
    const result = await fetch(url)
    const news = await result.json()
    this.setState({
      news: news.articles
    })
  }

  render() {
    return (
      <Fragment>
        <Header title='Noticias React API' />
        <div className='container white news-container'>
          <Form checkNews={this.checkNews} />
          <NewsList news={this.state.news} />
        </div>
      </Fragment>
    )
  }
}

export default App
