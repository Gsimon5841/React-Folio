import {useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import G from '../../assets/images/logo-g.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray =['e','o','r','g','e','s']
    const jobArray = ['I', "'m", ' ', 'a', ' ', 'w', 'e','b', ' ', 'd','e','v','e','l','o','p','e','r']



    return (
        <div className="container home-page"> 
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>    
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>l</span>
                <span className={`${letterClass} _15`}>o,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                <img src={G} alt="developer's name" />
                <AnimatedLetters letterClass={letterClass} strArray= {nameArray} index={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray= {jobArray} index={22} />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
            </div>
        </div>
    );
}

export default Home