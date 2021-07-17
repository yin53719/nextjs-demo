import React,{useEffect} from 'react'

const Hello = (props) => {
 
  useEffect(()=>{
    console.log(window,props)
  })
    
    return <div>Next 1111stars: </div>
}

export default Hello