import React from 'react';
import {useForm, useStep} from 'react-hooks-helper';
import BasicInfo from '../FarmhouseStepForm/BasicInfo'
import LayoutAndPrice from '../FarmhouseStepForm/LayoutAndPrice'
import FacilitiesAndServices from '../FarmhouseStepForm/FacilitiesAndServices'
import Amenities from '../FarmhouseStepForm/Amenities'
import Photos from '../FarmhouseStepForm/Photos'
import Policies from '../FarmhouseStepForm/Policies'
import Step1 from '../Caterers StepForm/Step1'

const defaultData = {
    name: '',
    country: '',
    address: '',
    streetAddress: '',
    city:'Karachi',
    numberOfBedrooms:  '',
    numberOfBathrooms: '',
    numberOfLounges: '',
    numberOfBeds:'',
    howManyGuests:'',
    numberOfChairs:'',
    numberOfSofas: '',
    numberOfTables: '',
    farmSize: '',
    parking:false,
    cancellationPolicy:['1 day before arrival', '3 days before arrival', '7 days before arrival', '10 days before arrival', '30 days before arrrival'],
    facilities:[{freeWifi:false, airConditioning:false, jacuzzi:false, swimmingPool: false, garden: false,smoking: ''}],
    price:''

}
const steps = [
    {id:'Basic Info'},
    {id:'Facilities and Services'},
    {id:'Layout and Price'},
    {id:'Photos'},
    {id:'Policies'}
]


export const MultiStepForm= () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep:0
    })
    
    const props = {formData, setForm, navigation};

    switch(step.id){
        case'Basic Info':
        return <BasicInfo {...props} />
        case'Layout and Price':
        return <LayoutAndPrice {...props} />
        case'Facilities and Services':
        return <FacilitiesAndServices {...props} />
        case'Amenities':
        return <Amenities {...props} />
        case'Photos':
        return <Photos {...props} />
        case'Policies':
        return <Policies {...props} />
        
        
    }


    return (
        <div className='container'>
            <h4>Multi-step Form</h4>
            {MultiStepForm()}
        </div>
        
    )
}