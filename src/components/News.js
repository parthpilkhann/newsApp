import React, { useEffect, useState } from 'react'
import Newscard from "./Newscard.js"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner"


export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=${props.pageSize}&category=${props.category}&page=${page}&apiKey=0d6144c81dd242b08d1cb372616dd1b5`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        console.log(totalResults);
        setLoading(false);
    }


    useEffect(() => {
        fetchData();
        console.log('useeffect fired')
        console.log(articles);
    }, [props])


    const fetchMoreData = async () => {
        setPage(page + 1)
        // setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=${props.pageSize}&category=${props.category}&page=${page}&apiKey=0d6144c81dd242b08d1cb372616dd1b5`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        // console.log(totalResults);
        // console.log('data fetched');
        // setLoading(false);
    }

    return (
        <>
            <div className="container" style={{ width: 1000 }} >
                <h1 className='text-center my-3'>Top Headlines from NewsPanda</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row" >
                            {articles.map((element, index) => {
                                return <div className='col-md-4' key={element.url + index}>
                                            <Newscard title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} />
                                        </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>

    )
}
