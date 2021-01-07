import React from "react"
import git from '../images/giticon.svg'
import linked from '../images/linkedin-icon.svg'
import './style.scss'

export default function head(){
    return(

        
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Manan Choksi</title>
            <link rel="stylesheet" href="app/style.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,500;1,800&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
        </head>
        <div class="container">
        <body>

        <section class="wrapper">
            <nav id="navhead">
                <div class="logo">
                MC

                </div>
            <ul class="links">
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Experiences</li>
            </ul>
        </nav>
        
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
            <span>Manan Choksi</span>
            <br />
            
            
            

            <a href="https://github.com/mcho6881">
                <img src={git} class="githubIcon" />
            </a>
            
            <a href="www.linkedin.com/in/manan-choksi-65a6a5203" >
                <img src={linked} class="linkIcon" />
            </a>
        </div>
        <br />
        <div id="uni">
            Bachelor of Adv. Computing @ USYD
        </div>
        <div id ="city">
            Sydney
        </div>
        
    </section>
    



    

    

    
    

    
</body>
</div>
</html>
    )
}

export default head;