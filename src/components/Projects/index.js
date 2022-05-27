import React, { Component } from 'react';
import CovidExp from '../../assets/images/covid-exp.png'
import CodeQuiz from '../../assets/images/code-quiz.png'
import './index.scss'
import PassGen from '../../assets/images/pass-gen.png'



class Projects extends Component {
    state = {  } 
    render() { 
        return (<>
        <div className='project-container' to='/'>
            <span>
                <a href='https://github.com/zk229/covid-exposure' target='_blank'>

            <img className='img' src={CovidExp} alt = "project"  />
                </a>

            </span>
        </div>

        <div className='project-container' to='/'>
            <span>
                <a href='https://github.com/zk229/covid-exposure' target = '_blank'>

            <img className='img' src={CodeQuiz} alt = "project"  />
                </a>

            </span>
        </div>
        <div className='project-container' to='/'>
            <span>
                <a href='https://github.com/Gsimon5841/Random-Password-Generator' target='_blank'>

            <img className='img' src={PassGen} alt = "project"  />
                </a>

            </span>
        </div>
        </>);
    }
}
 
export default Projects;