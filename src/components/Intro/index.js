import { useState } from 'react'
import './Intro.css'
import IntroCard from './IntroCard'
import introData from '../../Data/IntroData'

const Intro = () => {
    const [questions] = useState(introData)
    return (
        <>
        <section className='home-section'>
        <h1 className='introheading'>Welcome to Skill learn</h1>
            <div className='container'>
                <h3>There may be a question on your mind</h3>
                <section className="info">
                    {questions.map(questions => {
                        return <IntroCard key={questions.id} {...questions}/>
                    })}
                </section>
            </div>
        </section>
        </>
    )
}

export default Intro
