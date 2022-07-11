import { NextComponentType } from 'next'
import styles from './VideoBackground.module.css'

const VideoBackground: NextComponentType = () => {
    return (
        <div className={styles.bgWrap}>
          <video
            muted
            loop
            autoPlay
            style={{height:'100%',width:"auto"}}
          >
            <source src="background.mp4" type="video/mp4"/>
          </video>
      </div>
    )
}

export default VideoBackground