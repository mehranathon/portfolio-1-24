import { useEffect, useRef } from "react"
import styles from "./AboutMe.module.css"


export const AboutMe=({imgLoaded,setImgLoaded})=>{
    const headshot=useRef(null)
    useEffect(()=>{
        if (headshot.current.complete) setImgLoaded(true)
    },[])
    return(
        <div className={styles.container}>
        <div className={styles.topCard}>
            <div className={`${styles.headshotContainer}${imgLoaded?" "+styles.loaded:""}`}>
                <img 
                    className={styles.headshot} 
                    ref={headshot} 
                    src={"/headshot.jpeg"} 
                    onLoad={()=>setImgLoaded(true)}/>
            </div>
            <div className={styles.info}>
                <h1 style={{animationDelay:".25s"}}>Mehran Khamnehipour</h1>
                <h2 style={{animationDelay:".35s"}}>Software Developer</h2>
                <h3 style={{animationDelay:".45s"}}>Los Angeles, CA | <a href="mailto:mehran.khmn@gmail.com">mehran.khmn@gmail.com</a></h3>
            </div>
        </div>
        <div className={styles.personalStatement}>
            <p>Hi! Thanks for stopping by.</p>
            <p>I am a software developer with 3.5 years of full-time professional experience building web applications in the federal space. I 
            started my career as a front-end developer and continue to hold a deep interest in modern ui/ux. This website was built using 
            React/next.js, and I have a little over 2 years of professional experience working on React apps.</p>
            <p>For the past year and a half, I have been working as a full-stack developer on an enterprise web application with microservice 
            architecture in the AWS Cloud with a modern tech stack and CI/CD pipeline. I had the chance to build, enhance, and maintain features 
            from the ground up i.e. from db calls to api design to ui implementation.</p>
            <p>My professional experience as a developer has been defined by getting thrown into the deep end and picking up new technologies on 
            the go. In other words, I have a proven track record of learning, adapting, and delivering on the job. I'm not afraid to ask for help, 
            though I am very much self-taught and self-motivated. I am eager for feedback and direction but fully capable of shipping quality 
            products and features independently.</p>
            <p>I'm currently working on porting some of my personal projects over to this website. In the meantime, feel free to click around and 
            browse my credentials. Please reach out for any additional resources should you be interested in working together.</p>
            <p>Cheers!</p>
        </div>
        </div>

    )

}