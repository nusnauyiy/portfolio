import { RESEARCH_PROJECTS } from "./sectionsContents";
import { ProjectView } from "./ProjectView";

export const ResearchProjects = () => {
  return <ProjectView projects={RESEARCH_PROJECTS} isPaper={true}/>
};
