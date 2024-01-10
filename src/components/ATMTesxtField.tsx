import React from 'react'

type ATMTextFieldProps = {
    className:string;
    label: string;
    required: boolean;
    name?:string;
    placeholder :string;
onchange:(e : React.ChangeEvent<HTMLInputElement> )=>void
}

const ATMTesxtField = ({ label, required ,name , placeholder , onchange , className}: ATMTextFieldProps) => {
    return (
        <div>
            <div className='flex'>
                <div>{label}</div>
                <div>{required && <div>*</div>}</div>
            </div>

            <div>
                <input
                className={className}
                name={name}
                placeholder={placeholder}
                required={required}
                onChange={(e)=>{onchange}}
                
                />
            </div>
        </div>
    )
}

export default ATMTesxtField