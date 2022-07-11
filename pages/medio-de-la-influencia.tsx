import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import modulo from '../styles/influencia.module.css'
import Background1 from '../components/BackgroundImage/BackgroundImage'
import MobileMenu from '../components/MobileMenu/MobileMenu'

import arrowDown from '../assets/images/down.svg'
import arrowYellowUp from '../assets/images/arrow_yellow_up.svg'
import arrowYellowDown from '../assets/images/arrow_yellow_down.svg'
import foto from '../assets/images/foto.jpg'
import foto2 from '../assets/images/foto2.jpg'

import news1 from '../assets/noticias/news1.png'
import news2 from '../assets/noticias/news2.jpg'
import news3 from '../assets/noticias/news3.jpg'

import logoFooter from '../assets/images/Logo-footer.svg'

import igBlack from '../assets/images/ig-black.svg'
import lnBlack from '../assets/images/ln-black.svg'

const MedioDeLaInfluencia: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileMenu/>
      <main className={styles.main}>
        <div className={modulo['first-section']}>
          <div className={modulo['content-graph']}>
            <div>
              <span className={modulo['item-graph']}>
                75%
              </span>
              <p className={modulo['item-description']}>
                De las personas es susceptible de cambiar sus opiniones por presión del entorno. 
              </p>
            </div>
            <div style={{'marginTop':'123px'}}>
            <p className={modulo['item-description']}>
              Y el otro
              </p>
              <span className={modulo['item-graph']}>
                25%
              </span>
              <p className={modulo['item-description']}>
              por lo menos dudará de su posición. 
              </p>
            </div>
            <div style={{'marginTop':'50px'}}>
              <span style={{'fontWeight':'300','fontSize':'12px','lineHeight':'29px','letterSpacing':'-0.02em'}}>
              *Experimento sociologia social Salomon Asch.
              </span>
            </div>
          </div>
            
          <Background1 style={{'height':'calc(100vh + 70px)'}}/>
        </div>
       

      </main>

      <footer className={styles.foot} style={{'paddingTop': '255px',paddingBottom:'60px'}}>

            <div>
              <Image src={logoFooter}/>
            </div>
            <div style={{'marginTop':'25px'}}>
                <span style={{'fontWeight':'500','fontSize':'13px','lineHeight':'20px','letterSpacing':'0.4em','textTransform':'uppercase'}}>
                  latinoamerica
                </span>
            </div>
            <div style={{'marginTop':'80px', 'display':'flex','flexDirection':'row'}}>
               <div style={{flex:'1','margin':'auto'}}>
                <span style={{'fontWeight':'700','fontSize':'16px','lineHeight':'24px','letterSpacing':'0.1em','textTransform':'uppercase'}}>
                  SíGANOS
                  </span>
               </div>
               <div style={{'display':'flex','width':'90px','justifyContent':'space-between'}}>
                  <a href="linkedin.com">
                    <div style={{'width':'37px','height':"37px"}}>
                      <Image src={lnBlack} layout='responsive'/>
                    </div>
                  </a>
                  <a href="instagram.com">
                    <div style={{'width':'37px','height':"37px"}}>
                      <Image src={igBlack} layout='responsive'/>
                    </div>
                  </a>
               </div>
            </div>
      </footer>
    </div>
  )
}

export default MedioDeLaInfluencia
