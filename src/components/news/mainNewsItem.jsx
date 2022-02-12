
const MainNewsItem = ({news}) => {
  return (
    <div className="news__main-new" /* style={{ backgroundImage: `url(${news.image})` }} */>
      <img src={news.image} alt="" />
      <h2><a href={news.url} target="_blank">{news.title}</a></h2>
      <p>{news.description}</p>
    </div>
  );
};

export default MainNewsItem;