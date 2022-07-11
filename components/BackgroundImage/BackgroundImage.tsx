import { NextComponentType } from 'next'
import styles from './BackgroundImage.module.css'
import Image from 'next/image'

import fondo from '../../assets/images/Illo.svg'

interface Props {
  style: Object
}

const BackgroundImage: NextComponentType<Props> = (props) => {
  const {style} = props
    return (
        <div className={styles.bgWrap} style={style}>
          <Image src={fondo} layout="responsive"/>
      </div>
    )
}

export default BackgroundImage