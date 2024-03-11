import React from 'react'
import CategoryItemList from './CategoryItemList'

const ResCategory = ({data}) => {
  return (
    <div className="w-6/12 mx-auto my-4">
        {/* Header */}
        <div className="flex flex-col rounded-sm  shadow-lg">
            <div className='flex justify-between bg-slate-200 rounded-sm py-2 px-2'>
            <span className='font-semibold text-lg '>{data?.title} ({data?.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            <div>
            <CategoryItemList data={data?.itemCards}/>
            </div>
        </div>
        {/* Body */}
        <div>
       
        </div>
        {console.log(data)}
    </div>
  )
}

export default ResCategory