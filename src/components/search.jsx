import React, { useState } from 'react'
import { useDebaunce } from '../hook/useDebaunce'
import { useSearch } from '../service/query/useSearch'
import { CategoryCard } from './category-card'
import { useLocation } from 'react-router-dom'

export const Search = () => {
    const [InputValue, setInputValue] = useState("")
    const debounceValue = useDebaunce(InputValue)
    const {data} = useSearch(debounceValue)
    const location = useLocation()

    React.useEffect(() =>{
        setInputValue("")
    }, [location.pathname])

  return (
    <div className='w-[100%] py-5 bg-slate-300 flex flex-col rounded-xl shadow-lg shadow-gray-400  '>
        <input onChange={(e) => setInputValue(e.target.value)} value={InputValue} className='w-[250px] h-[50px] rounded-full px-5 ml-20' type="text" placeholder='search' />
        {InputValue.length >= 3 &&(
            <div className='w-[100%] h-auto bg-blue-200 z-10 '>
            {data?.map((item) => <CategoryCard key={item.id} {...item}/> )}
            </div>    
                ) }
        
    </div>
  )
}
