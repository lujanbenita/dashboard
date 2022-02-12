
const BigNewsItem = ({ news }) => {
  
  return (
    <div className="news__big-new" style={{backgroundImage: `url(${news.image})`}} >
      <h2><a href={news.url} target="_blank">{news.title}</a></h2>
    </div>
  );
};

export default BigNewsItem;