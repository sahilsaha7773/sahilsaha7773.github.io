import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>SSX</BreadcrumbItem>
      </Breadcrumbs>
      <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 flex flex-col items-center mx-10 my-10 gap-5">
        <ProjectCard
          name="Utopia Fetch"
          description="Lite & fast micro PHP library that provides a convenient and flexible way to perform HTTP requests in PHP applications.        "
          github="https://github.com/utopia-php/fetch"
          tech={["PHP"]}
          image="phpFetch.png"
        />
        <ProjectCard
          name="Pigeon"
          description="One of my most popular projects which have seen 150k+ users till date. It is a web app to send and receive anonymous messages developed on MERN stack."
          github="https://github.com/sahilsaha7773/pigeon-client"
          tech={["React", "Node", "Express", "MongoDB"]}
          image="pigeon.png"
        />
        <ProjectCard
          name="React Carousel Minimal"
          description="Easy to use, responsive and customizable carousel component for React Projects."
          github="https://github.com/sahilsaha7773/react-carousel-minimal"
          tech={["React", "JavaScript", "HTML", "CSS"]}
          image="reactCarouselMinimal.png"
        />
        <ProjectCard
          name="Dynamic CP Sheet"
          description="Inspired by the dynamic a2oj ladder, I decided to make a similar thing for one of the best collections of CP problems. This is the dynamic version of the Striver’s CP Sheet(Solely for preparing for Coding Rounds of Top Product Based Companies and to do well in Coding Sites and Competitions).        "
          github="https://github.com/sahilsaha7773/dynamic-cp-sheet"
          tech={["React", "JavaScript", "HTML", "CSS"]}
          image="dynamicCpSheet.png"
        />
        {/* <ProjectCard /> */}
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
};

export default ProjectsPage;
