import ParagraphCard from '../common/paragraphCard';
import TitleCard from '../common/titleCard';
import ProjectCard from '../projects/projectCard';

const CardProjects = () => {
  return (
    <div className="card-projects card size-row-12">
      <TitleCard>Projects</TitleCard>
      <ParagraphCard>Last projects</ParagraphCard>

      <div className="card-projects__list">

        <ProjectCard 
          title={"Shoes Store"}
          text={"Different people have different taste, and various types of shoes. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
          url={"https://shoes-store-demo.vercel.app/"}
          tags={"#Next #Redux #Stripe @MongoDb"}
          img={"project0.jpg"}
        />

        <ProjectCard 
          title={"Beers project"}
          text={"Beers company web, Only for adults. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, for many for much adipisci velit..."}
          url={"https://beers-web.vercel.app/"}
          tags={"#Next #Redux #JWT #i18n"}
          img={"project1.jpg"}
        />

        <ProjectCard 
          title={"Contact book app"}
          text={"First project as backend. Create your contact book by the face. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
          url={"https://agenda-node-crud.herokuapp.com/"}
          tags={"#node #Express #Mongodb #Mongoose #Handlebars #Tailwind"}
          img={"project2.jpg"}
        />

      </div>
    </div>
  );
};

export default CardProjects;