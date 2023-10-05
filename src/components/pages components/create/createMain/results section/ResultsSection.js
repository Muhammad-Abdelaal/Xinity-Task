import React from "react";
import Card from "../../../../UI/Card";
import classes from './ResultsSection.module.css'
import Section from "../../../../Layout/Section/Section";
import pieChartIcon from '../../../../../Assets/pie-chart-svgrepo-com.svg';
import checkedIcon from '../../../../../Assets/checked-svgrepo-com.svg';
import DropdownInput from "../../../../shared/dropdownInput/DropdownInput";

const TOTAL_RESULTS_DATA = [
  { title: "Sourcing Projects In Progress", count: 8 },
  { title: "Completed Events", count: 28 },
];

const DURATION = ['This day','This week', 'This month', 'This year' ]

function ResultsSection() {

  const totalResultsList = TOTAL_RESULTS_DATA.map((item, index) => {
    return (
      <Card customStyle = {{padding:'20px',width:'100%'}} key={index}>
        <div className={classes["results-card_header"]}>
          <img width='20px' alt="img" src={index === 0 ? pieChartIcon : checkedIcon} />
          <DropdownInput customInputStyle={{padding:'5px'}} options = {DURATION} />
        </div>
        <div className={classes["results-card_data"]}>
          <h1 className={classes["results-card_data-count"]}>
            {item.count}
          </h1>
          <p className={classes["results-card_data-title"]}>
            {item.title}
          </p>
        </div>
      </Card>
    );
  });

  return (
    <Section className={classes["results-section"]}>{totalResultsList}</Section>
  );
}

export default ResultsSection;
