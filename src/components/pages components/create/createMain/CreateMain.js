import ResultsSection from './results section/ResultsSection';
import MyProjects from './myProjects/MyProjects';

const DUMMY_PROJECTS_EVENTS = [
  {id:1150, name:'RFQ For Laptops', type:'RFQ', status:'In approval', date:'3/10/2023'},
  {id:1524, name:'RFP For consumables', type:'RFP', status:'Draft', date:'3/10/2023'},
  {id:1125, name:'Tender One', type:'Sourcing Request', status:'In Sourcing', date:'3/10/2023'},
  {id:6658, name:'Tender One', type:'RFI', status:'Fulfilled', date:'3/10/2023'},
]

function CreateMain() {
  return (
    <div>
      <ResultsSection />
      <MyProjects DUMMY_DATA = {DUMMY_PROJECTS_EVENTS} title = {'My Projects'} />
      <MyProjects DUMMY_DATA = {DUMMY_PROJECTS_EVENTS} title = {'My Events'} />
    </div>
  )
}

export default CreateMain;