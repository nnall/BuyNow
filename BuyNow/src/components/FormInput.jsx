import React from 'react'
import "./formInput.css"

const FormInput = ({onChange, ...inputProps}) =>{

    // key={input.id}
    // {...input}
    // value={values[input.name]}
    // onChange={onChange}

//   const {onChange, id, ...inputProps } = props;

  return (
    <div className = "formInput">
      {/* <label htmlFor="">{label}</label> */}
      <input {...inputProps} onChange={onChange} placeholder={inputProps.placeholder}/>
    </div>
  )
}

export default FormInput;
