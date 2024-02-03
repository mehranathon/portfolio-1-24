'use client'

import styles from './Profile.module.css'

export const Profile=({children})=>{
    return(
        <div className={styles.TopContainer}>
            {children}
        </div>
    )
}