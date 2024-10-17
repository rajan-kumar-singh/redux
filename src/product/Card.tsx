import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/sliceData'

const Card = () => {
    const datalength=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const handleremoveCard =(id)=>{
        dispatch(remove(id))

    }
  return (
    <div>{
    datalength && datalength.map((item, index) => (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" key={index}>
 
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={item.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {item.title}
              </a>
            </h3>
            {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}
          </div>
          <p className="text-sm font-medium text-gray-900">{item.price}</p>
        </div>
       
      </div>

    </div>
    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleremoveCard(item.id)}>
remove
</button>
    </div>
  ))}
    </div>
  )
}

export default Card
