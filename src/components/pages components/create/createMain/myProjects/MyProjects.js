import React from "react";
import classes from "./MyProjectsSection.module.css";
import Card from "../../../../UI/Card";
import ProjectRow from "./projectRow/ProjectRow";
import Section from "../../../../Layout/Section/Section";
import ViewMore from "../../../../shared/viewMore/ViewMore";

const HEADER_TITLES = ["ID", "Name", "Type", "Status", "Date"];
function MyProjects({DUMMY_DATA, title}) {

  const headerTitlesList = HEADER_TITLES.map(item => {
    return <div className={classes["header-title"]}>{item}</div>;
  });

  const projectEventList = DUMMY_DATA.map((item,index) => {
    return <ProjectRow key={index} projectDetails={item} />
  })
  return (
    <Section>
      <Card className={classes["my-projects-container"]}>
        <h3 className={classes["my-projects-title"]}>{title}</h3>
        <div className={classes["my-projects-header"]}>{headerTitlesList}</div>
        {projectEventList}
        <ViewMore />
      </Card>
    </Section>
  );
}

export default MyProjects;
