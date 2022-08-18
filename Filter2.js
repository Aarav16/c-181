import React from 'react'
import{Image,View} from react-native
const filter2 = ({
face:{
    bounds:{
        size:{
            width:faceWidth,
            height:faceHeight
        }
    },
        leftEyeposition,
        rightEyeposition
    }

})=>{
    const glassesWidth=faceWidth
    const glassesHeight=faceHeight/3
    const transformAngle=(
        angleRad=Math.atan(
            (rightEyeposition.y-leftEyeposition.y)/(rightEyeposition.x-leftEyeposition.x)
     ) )=>angleRad*100/Math.PI
    
    return(
        <View style={{
            position:'absolute',
            left:leftEyeposition.x-glassesWidth*0.675,
            top:leftEyeposition.y-glassesHeight*0.5
        }}>
            <Image
            source={require('../assets/glasses-round.png')}
            style={{
                width:glassesWidth,
                height:glassesHeight,
                resizeMode:'contain',
                transform:[{rotate:`${transformAngle()}degree`}]
            }}></Image>
        </View>
    )
}


