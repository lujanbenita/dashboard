
const LittleNewsItem = ({news}) => {
  return (
    <div className="news__little-new">
      <div className="news__little-new-image">
        <img src={news.image} alt="" />
      </div>
      <div className="news__little-new-content">
        <h3><a href={news.url} target="_blank">{news.title}</a></h3>
        <p>{news.description}</p>
      </div>
    </div>
  );
};

export default LittleNewsItem;