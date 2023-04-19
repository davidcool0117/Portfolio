import React from 'react'
import lottie from 'lottie-web';
import lottieAni from './gift_box.json';

function Lottie() {
    const gift_box = React.useRef();
    React.useEffect(()=>{
        lottie.loadAnimation({
            container: gift_box.current,
            animationData: lottieAni,
            loop: true,
            autoplay: true,
          });
    },[])
    return (
        <div ref={gift_box} style={{width:100, position:'relative'}}>
        </div>
    )
}

export default Lottie;