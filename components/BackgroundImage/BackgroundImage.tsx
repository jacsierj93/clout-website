import { NextComponentType } from 'next'
import styles from './BackgroundImage.module.css'
import Image, { StaticImageData } from 'next/image'

interface Props {
  style?: Object,
  src: StaticImageData
}

const BackgroundImage= ({style, src}: Props) => {
    return (
        <div className={styles.bgWrap} style={style || {}}>
          <Image src={src} layout="responsive"/>
      </div>
    )
}

export default BackgroundImage