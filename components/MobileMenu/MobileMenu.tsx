import { Twirl as Hamburger } from 'hamburger-react'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { useState } from 'react'
import style from './MobileMenu.module.css'

import twitter from '../../assets/images/tw-yellow.svg'
import instagram from '../../assets/images/ig-yellow.svg'

const  MobileMenu = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <nav style={{'width':'100%', display:'flex', 'flexDirection': 'row', justifyContent:'space-between', 'padding':'0 16px'}}>
                <div style={{zIndex:'3', marginTop: 'auto'}}>
                    <Image src={logo}/>
                </div>
                <div className={style['menu-wrapper']} style={{zIndex:'3'}}>
                    <Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} rounded/>
                </div>
            </nav>
            {
                isOpen && (
                    <div className={style['menu-list-wrapper']}>
                        <div style={{display:'flex', flex:"1"}}>

                        </div>
                        <div style={{display:'flex', flex:"2", flexDirection:'column'}}>
                            <div className={style['menu-mobile-items']}>
                                <a>El medio de la influencia</a>
                            </div>
                            <div className={style['menu-mobile-items']}>
                                <a>Nuestra historia</a>
                            </div>
                            <div className={style['menu-mobile-items']}>
                                <a>Noticias</a>
                            </div>
                            <div className={style['menu-mobile-items']}>
                                <a>Contacto</a>
                            </div>
                        </div>
                        <div style={{display:'flex', flex:"1"}}>
                            <div style={{display:'flex','flexDirection':'row', 'padding':'0 140px', 'width':'100%','justifyContent':'space-between'}}>
                                <div className={style['social-item']}> <Image src={twitter} layout='responsive'/> </div>
                                <div className={style['social-item']}> <Image src={instagram} layout='responsive'/> </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
         </div>
    )
}

export default MobileMenu