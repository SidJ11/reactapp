import React from 'react'
import { IMG_CDN } from "../utils/constants";

const CategoryItemList = ({data}) => {
  return (
    <div className="px-2 py-2">
        {console.log(data)}
        {data.map((item)=> {
            return (
                <div key={item?.card?.info?.id} className='flex justify-between py-2 border-b-2'>
                    {/* ITEM TITLE AND DESCRIPTION */}
                    <div className='w-9/12'>
                        <div className='font-semibold flex justify-between'>
                            <span className=''>{item?.card?.info?.name}</span>
                            <span>Rs {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className='py-1 italic text-gray-500'>{item?.card?.info?.description}</p>
                    </div>
                    {/* PRICE */}
                    <div className='flex flex-col'>
                        <img className='w-26 h-24 rounded-lg' src={IMG_CDN+item?.card?.info?.imageId}/>
                        <button className='border-2 rounded-lg bg-green-200 shadow-sm w-10/12 mx-auto'>ADD ➕</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryItemList