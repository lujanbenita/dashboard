import { useEffect } from 'react';
import LayoutDashboard from '../layout/layoutDashboard';
// import {FAKE_NEWS} from '../data/fakeNews'
import HeadNewsItem from '../components/news/headNewsItem';
import BigNewsItem from '../components/news/bigNewsItem';
import MainNewsItem from '../components/news/mainNewsItem';
import LittleNewsItem from '../components/news/littleNewsItem';
import { useState } from 'react';

// https://mediastack.com/documentation
const API_MEDIASTACK = import.meta.env.VITE_APP_COVID_API_MEDIASTACK

const sortWithImagesNewsFirst = (data) => {
  if (data.length > 0) {
    const res = data.sort((a, b) => !!b.image - !!a.image)
    return res
  }
}

const News = () => {

  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${API_MEDIASTACK}&countries=us&languages=en&sort=popularity&limit=35`)
      if (res.status === 200) {
        const response = await res.json()
        setNewsData(response.data)
      } else {
        console.log("Error al conectar")
      }

    })()
  },[])
  
  sortWithImagesNewsFirst(newsData)

  let arrayNewsBig 
  let arrayNewsHead 
  let arrayNewsMain 
  let arrayNewsMainLittle
  
  if (newsData.length > 0) {
    arrayNewsBig = sortWithImagesNewsFirst(newsData).slice(0,2)
    arrayNewsHead = sortWithImagesNewsFirst(newsData).slice(12,17)
    arrayNewsMain = sortWithImagesNewsFirst(newsData).slice(2,5)
    arrayNewsMainLittle = sortWithImagesNewsFirst(newsData).slice(5,12)
  }

  return (
    <LayoutDashboard title={"News"}>
      {newsData.length === 0 ? "Loading"
        :
      <div className="news">
        <div className="news__head-news">
          {arrayNewsHead.map(el => <HeadNewsItem news={el} key={el.title} />)}
        </div>

        <div className="news__big-news">
          {arrayNewsBig.map(el => <BigNewsItem news={el} key={el.title} /> )}
        </div>

        <div className="news__content">
          <div className="news__main">
            {arrayNewsMain.map(el => <MainNewsItem news={el} key={el.title} /> )}

          </div>
          <div className="news__little">
            {arrayNewsMainLittle.map(el => <LittleNewsItem news={el} key={el.title} /> )}
          </div>
        </div>
      </div>
      }
    </LayoutDashboard>
  );
};

export default News;