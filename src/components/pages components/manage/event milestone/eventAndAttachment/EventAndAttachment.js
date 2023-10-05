import React from 'react';
import Section from '../../../../Layout/Section/Section';
import Card from '../../../../UI/Card';
import classes from './EventAndAttachment.module.css';
import ControlHeader from '../../../../shared/controlHeader/ControlHeader';
import useModal from '../../../../../hooks/useModal';
import { createPortal } from 'react-dom';
import Modal from '../../../../UI/Modal';
import DropdownInput from '../../../../shared/dropdownInput/DropdownInput';
import useBoolean from '../../../../../hooks/useBoolean';
import icon from '../../../../../Assets/download.svg'

const DUMMY_EVENTS = ['RFP', 'Evaluation Criteria', 'Evaluation Mom'];
const DUMMY_ACTIONS = ['Create', 'Manage'];
const DUMMY_FILE_OPTIONS = ['Document', 'image']

function EventAndAttachment() {
  const  {modalState , modalStateHandler} = useModal();
  const  {isTrue:isSectionVisible, truthHandler:sectionVisibiltyHandler} = useBoolean(true);

  function changeModalStateHandler (state) {
    modalStateHandler(state)
  }
  const eventsList = DUMMY_EVENTS.map(item => {
    return (
      <div className={classes['event-row']}>
        <p style={item === 'RFP' ? {color:'#0078FF'} : {}}>{item}</p>
        <img src={icon} width='32px'  alt='img'/>
      </div>
    )
  });

  return (
    <Section>
      <Card customStyle ={isSectionVisible ? {border:'solid 2px #ccc', padding:'20px' , boxShadow:'none' } : {border:'solid 2px #ccc', padding:'20px' , boxShadow:'none', height:'65px'}}>
        <ControlHeader sectionVisibiltyHandler = {sectionVisibiltyHandler} changeModalStateHandler={changeModalStateHandler} header='Event & Attachment' controlActions={DUMMY_ACTIONS} />
        <div className={classes['events-header']}>
            <p>Name</p>
            <p>Attachments</p>
        </div>
        {eventsList}
      </Card>

      {modalState && createPortal(
        <Modal title ='Create Attachment'  changeModalStateHandler = {changeModalStateHandler}>
          <DropdownInput customStyle = {{marginBottom:'20px'}} options = {DUMMY_FILE_OPTIONS} placeHolder='Please Select Attachment Type' label= 'Attachment Type' />
          <div className={classes['file-content-upload-container']}>
              
                <img src={require('../../../../../Assets/Upload.png')} alt='img' style={{display:'block', margin:'auto'}} />
                <p style={{fontWeight:'500', margin:'10px 0'}}>Drop Files To Upload Or Click</p>
                <div className={classes['file-upload-actions']}>
                  <label className={classes['file-upload-action-label']} htmlFor='fileUploader'>Upload Files</label>
                  <input className={classes['file-upload-action']} id='fileUploader' type='file' />
                </div>
              
          </div>
        </Modal>, document.body)
      }
    </Section>
  )
}

export default EventAndAttachment;