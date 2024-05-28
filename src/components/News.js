import React, { useEffect , useState } from 'react'
import Newsitem from './Newsitem'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';



const News =(props)=> {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updatenews = async()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pagesize=10`
    setLoading(true)
    props.setProgress(30)
    fetch(url).then((res)=>{
        res.json().then((result)=>{
          props.setProgress(50)
          setdata(result.articles)
          setTotalResults(result.totalResults)
          setLoading(false)
            props.setProgress(100)
        })
    })
  }
  useEffect(()=>{
    updatenews()
  },[])

  const fetchMoreData = async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pagesize=10`
    setLoading(true)
      fetch(url).then((res)=>{
        res.json().then((result)=>{
          setdata(data.concat(result.articles))
          setTotalResults(result.totalResults)
          setLoading(false)
          })
      })
  }

    return (
      <>
      
    <div className="container" style={{marginTop : "100px"}}>
      
      <h2 className="text-center">Get Daily News - {props.heading}</h2>
      {loading && <Spinner/>}
      <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length !== totalResults}
          // loader={<Spinner/>}
          >
      <div className='row'>
          {data ? data.map((element,index)=>
            <div className="col-md-4" key={index} >
          <Newsitem title={element.title?element.title?.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          </div>
          )
          : null
          }
      </div>
      </InfiniteScroll>
      </div>
      </>
    )
  }
News.defaultProps = {
  country : "in",
  category : "general",
  heading : "General News"
}
News.propTypes = {
  country : propTypes.string,
  category : propTypes.string,
  heading : propTypes.string
}
export default News


