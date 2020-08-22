import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../lottie json/quiz.json'
export const Start = () => {
    const style={
        paddingBottom:"-100px"
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
               height={450}
               width={450}  
              />
          </div>
      )
    }
