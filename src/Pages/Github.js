import React from 'react'
import Cards from '../components/cards/CardBox';
import GitData from '../Data/GitData';

const Github = () => {
    return (
        <>
        <section className="home-section open">
            <div className="text">GitHub</div>
            <div className="card">
            {GitData.map((value) => {
                return(
                    <Cards
                        img={value.img}
                        heading={value.heading}
                        authImg={value.authImg}
                        authName={value.authName}
                        level={value.level}
                        authLink={value.authLink}
                    />
                )
            })}
            </div>
        </section>            
        </>
    )
}

export default Github
