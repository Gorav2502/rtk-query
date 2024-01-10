import React from 'react'
// import ATMTesxtField from '../components/ATMTesxtField'
import ATMButton from '../components/ATMButton'
import {  Outlet, useNavigate } from 'react-router-dom'

const Students = () => {
    const navigate = useNavigate()
    const number = 4;
    const array = [1, 3, 7, 4, 3, 6, 5];
    let max= 0;
    
    for (let ind = 0; ind <= array.length - number; ind++) {
        const split= [];
        for (let i = 0; i < number; i++) {
            split[i] = array[ind + i];
        }
        console.log(split);
    
        let sum = 0;
        for (let i = 0; i < split.length; i++) {
            sum += parseInt(split[i].toString());
        }
    
        if (max < sum) {
            max = sum;
        }
    }
    
    console.log(max);
    
    // array.map((el: any, ind: number) => {
    //     const split = array.slice(ind, number + ind)
    //     console.log(split)
    //     const sum = split.reduce((acc: any, el: any) => {
    //         return parseInt(el + acc)
    //     }, [])
    //     if (max < sum) {
    //         max = sum
    //     }
    // })
    // console.log(max);
    const find = 5
    let count = 0
    for (var i = 0; i < array.length; i++) {
        
        if (find === array[i]) {
console.log('Element is present at index ' ,count)
        }
        count++
    }
    return (
        <>
            <div className='flex gap-5 '>
                <ATMButton
                    label='Students details'
                    onClick={() => { navigate('AllStudents') }}
                    className='border p-2'
                />

                <ATMButton
                    label='Students Form'
                    onClick={() => { navigate('FormWrapper')}}
                    className=' border p-2 '
                />

                <ATMButton
                    label='Students id'
                    onClick={() => { }}
                    className='border p-2'
                />

            </div>
            <Outlet />
        </>
    )
}

export default Students