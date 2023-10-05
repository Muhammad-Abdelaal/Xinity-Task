import React, { useState } from 'react';
import Section from '../../../../Layout/Section/Section';
import Card from '../../../../UI/Card';
import ControlHeader from '../../../../shared/controlHeader/ControlHeader';
import classes from './Milestone.module.css';
import MilestoneEventDetails from './milestoneEventDetails/MilestoneEventDetails';
import useModal from '../../../../../hooks/useModal';
import { createPortal } from 'react-dom';
import Modal from '../../../../UI/Modal';
import TextInput from '../../../../shared/textInput/TextInput';
import DropdownInput from '../../../../shared/dropdownInput/DropdownInput';
import TextArea from '../../../../shared/textArea/TextArea';
import useBoolean from '../../../../../hooks/useBoolean';

const DUMMY_ACTIONS = ['Save As Template', 'Cancel', 'Delete', 'Create', 'Import', 'Export'];
const DUMMY_HEADER = ['Name', 'Type', 'Due Date', 'Assignee', 'Linked Attachment', 'Status', 'Action'];
const DUMMY_MILESTONE = ['Define Tender Strategy', 'Milestone', '4/10/2023', 'omar', '', 'In progress', ''];
const DUMMY_SUB_MILESTONE = [
    ['Add Technical Specs', 'Todo', '', '', 'RFP', 'Not Initiated', ''],
    ['Add Technical Specs', 'Todo', '', '', 'Evaluation Criteria', 'Finalized', ''],
    ['Add Technical Specs', 'Todo', '', '', 'Evaluation Criteria', 'Not Initiated', '']
];
const DUMMY_LINKED_OPTIONS = ['L1', 'L2', 'L3'];
const DUMMY_PREDECESSOR_OPTIONS = ['P1', 'P2', 'P3'];
const DUMMY_TYPES_OPTIONS = ['T1', 'T2', 'T3'];
const DUMMY_ASSIGNEE_OPTIONS = ['A1', 'A2', 'A3'];

function Milestone() {
  const [modalContentType, setModalContentType] = useState('milestone')
  const {modalState , modalStateHandler} = useModal();
  const  {isTrue:isSectionVisible, truthHandler:sectionVisibiltyHandler} = useBoolean(true);

  const headerList = DUMMY_HEADER.map((item, index) => {
    if (index === 0) {
        return (
            <div style={{display:'flex',gap:'10px'}}>
                <input type='checkbox' />
                <p>{item}</p>
            </div>
        )
    }
    return <p>{item}</p>
  });

  function changeModalStateHandler (state) {
    modalStateHandler(state)
  }
  function modalContentTypeHandler (type) {
    setModalContentType(type)
  }
  const milestoneModal = <div style={{marginTop:'20px'}}>
    <TextInput customStyle = {{marginBottom:'20px'}} placeHolder='Please Enter Description'  label='Name' imp={true}/>
    <DropdownInput customStyle = {{marginBottom:'20px'}} options = {DUMMY_LINKED_OPTIONS} placeHolder='Please Select Attachment' label= 'Linked Attachment' />
    <DropdownInput customStyle = {{marginBottom:'20px'}} options = {DUMMY_PREDECESSOR_OPTIONS} placeHolder='Please Select Predecessor' label= 'Predecessor' />
    <TextArea placeHolder='Please Enter Request Description' label='Description' />
  </div>
  const taskModal = <div style={{marginTop:'20px'}}>
    <DropdownInput customStyle = {{marginBottom:'20px'}} options = {DUMMY_TYPES_OPTIONS} placeHolder='Please Select Type' label= 'Type' />
    <TextInput customStyle = {{marginBottom:'20px'}} placeHolder='Please Enter Name'  label='Name' imp={true}/>
    <TextInput customStyle = {{marginBottom:'20px'}} placeHolder='Please Enter Description'  label='Description'/>
    <DropdownInput customStyle = {{marginBottom:'20px'}} options = {DUMMY_ASSIGNEE_OPTIONS} placeHolder='Please Select Assignee' label= 'Assignee' />
  </div>
  return (
    <Section>
        <Card customStyle ={isSectionVisible ? {border:'solid 2px #ccc', padding:'20px' , boxShadow:'none' } : {border:'solid 2px #ccc', padding:'20px' , boxShadow:'none', height:'65px'}}>
            <ControlHeader sectionVisibiltyHandler = {sectionVisibiltyHandler} changeModalStateHandler={changeModalStateHandler} header='Milestones & Tasks' controlActions={DUMMY_ACTIONS} />
            <div className={classes['milestone-task-header']}>
                {headerList}
            </div>
            <MilestoneEventDetails  status='main' milestoneEventDetails={DUMMY_MILESTONE} milestoneEventSubDetails = {DUMMY_SUB_MILESTONE} />
        </Card>
        {modalState && createPortal(
            <Modal title ='Create Milestones & Tasks'  changeModalStateHandler = {changeModalStateHandler}>
                <p style={{width:'max-content', display:'inline'}}>Select type: </p>
                <span style={{marginLeft:'10px'}}>
                    <input defaultChecked  onClick={()=>{modalContentTypeHandler('milestone')}} id='milestone' value='milestone' name='eventMilestone' type='radio' />
                    <label style={{marginLeft:'5px'}} >Milestone</label>
                </span>
                <span style={{marginLeft:'10px'}}>
                    <input onClick={()=>{modalContentTypeHandler('task')}} id='task' value='task' name='eventMilestone' type='radio' />
                    <label style={{marginLeft:'5px'}} >Task</label>
                </span>

                {modalContentType === 'milestone' ? milestoneModal : taskModal } 
            </Modal>, document.body)
        }
    </Section>
  )
}

export default Milestone;