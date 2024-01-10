import React, { useEffect } from 'react'
import { useGetAllPostsQuery } from '../services/PostApi'
import ATMTable from '../components/ATMTable'

const AllStudents = () => {
    // const {data , isLoading } = useGetAllPostsQuery('')
    // console.table(data)

    useEffect(()=>{

    },[ ])
  const data = [{id:1 , userId:2 , title:"date"  , body:'databody'}]
    const columns = ['ID', 'UserId', 'Title' , 'Body'];
  console.table(data)
  return (
   <>
   {/* {isLoading?<div>loading....</div>: */}
   
   <div>


  <ATMTable
columns={columns}
data = {data}
  />

   </div>
   {/* } */}
   </>
  )
}

export default AllStudents