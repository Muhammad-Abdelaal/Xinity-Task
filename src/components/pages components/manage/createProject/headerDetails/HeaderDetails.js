import React from 'react';
import Card from '../../../../UI/Card';
import TextInput from '../../../../shared/textInput/TextInput';
import DropdownInput from '../../../../shared/dropdownInput/DropdownInput';
import classes from './HeaderDetails.module.css';
import TextArea from '../../../../shared/textArea/TextArea';

function HeaderDetails() {

  const currencyOptions = ['EGP', 'USD', 'SAR'];
  const departmentOptions = ['DEP1', 'DEP2', 'DEP3'];
  const sourcingOptions = ['STRAT', 'STRAT2', 'STRAT3'];

  return (
    <Card customStyle ={{border:'solid 2px #ccc', padding:'20px', boxShadow:'none'  }}>
        <h3 style={{marginBottom:'30px'}}>Header Details</h3>
        
        <form className={classes['header-details-form']}>
            <TextInput placeHolder={'Please Enter Project Title'} label={'Project Title'} imp={true} />
            <DropdownInput placeHolder={'Please Select your currency'} options={currencyOptions} label={'Currency'} imp={true} />
            <TextArea label = 'Description' placeHolder='Please Enter Description' />
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <TextInput placeHolder={'ex:12345'} label={'Preceding Document'} isID={true} />
                <DropdownInput placeHolder={'Please Select Department'} options={departmentOptions} label={'Department'} imp={true} />
            </div>
            <TextInput placeHolder={'ex: Muhammad Abdelaal'} label={'Owner'} />
            <DropdownInput placeHolder={'Please Select Sourcing Strategy'} options={sourcingOptions} label={'Sourcing Strategy'} imp={true} />

        </form>
    </Card>
  )
}

export default HeaderDetails