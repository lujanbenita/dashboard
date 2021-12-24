import ParagraphCard from "../common/paragraphCard"

const ProjectCard = ({ title, text, url, tags, img }) => {
  return (
    <div className="card-projects__item">
      <div className="card-projects__item-img">
        <img src={`/images/${img}`} alt="" />
      </div>
      <div className="card-projects__item-tags">{tags}</div>
      <div className="card-projects__item-title">{title}</div>
      <ParagraphCard>{text}</ParagraphCard>
      <div className="card-projects__item-link">
        <a href={url} target="_blank">
          View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
