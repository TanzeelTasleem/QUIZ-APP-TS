import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../lottie json/loading.json'

export const Loading =()=>{
    const style ={
        height:"100vh",
        backgroundColor:"#ed9d5a",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        }
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      return(
          <div style={style}>
              <Lottie
               options={defaultOptions}
               height={400}
               width={400}  
              />
          </div>
      )
}