'use client'

import { TtButton } from '../TtButton/TtButton';
import styles from './Footer.module.css'

export const Footer = () =>{
    const viewSource=()=>window.open('https://github.com/mehranathon/portfolio-1-24', '_blank').focus();
return(
    <div className={styles.container}>
        <TtButton 
            className={styles.button}
            onClick={viewSource}
            icon="</>"
            tooltip="View the Source Code on Github"
        />
    </div>
)
}