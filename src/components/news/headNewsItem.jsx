
const HeadNewsItem = ({ news }) => {
  return (
    <div className={`news__head-new category-${news.category}`}>
      <h3><a href={news.url} target="_blank">{news.title}</a></h3>
      <p>{news.description}</p>
    </div> 
  );
};

export default HeadNewsItem;