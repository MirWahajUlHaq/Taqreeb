import React,{useState, useEffect} from 'react'

export const checkBox = ({categories}) => {
    return categories.map((category, index) => {
        <li className='list-unstyled'>
            <input type='checkbox' className='form-checl-input' />
            <label className='form-check-label'>{category.name}</label>
        </li>
    })
}

//THIS COMPONENT WILL BE INTEGRATED IN THE PRODUCTS CATEGORY PAGE