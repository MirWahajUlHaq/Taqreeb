import React from 'react';
import {useForm, useStep} from 'react-hooks-helper';
import Step1 from './Step1'

const defaultData = {
    name: '',
    country: '',
    address: '',
    streetAddress: '',
    city:'Karachi',
    contactNumber:'',
    areaOfOperation: ['Gulistan-e-Jauhar', 'Gulshan-e-iqbal', 'DHA, North Karachi', 'North Nazimabad'],
    dishes:[],
    deliveryService:false,   
    price:''
}
const steps = [
    {id:'step1'}
]



export const CaterersMultiStepForm= () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep:0
    })
    
    const props = {formData, setForm, navigation};

    switch(step.id){
        case'step1':
        return <Step1 {...props}/>  
    }


    return (
        <div className='container'>
            <h4>Multi-step Form</h4>
            {CaterersMultiStepForm()}
        </div>
        
    )
}