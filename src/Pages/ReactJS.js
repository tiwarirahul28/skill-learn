import React from 'react'
import Cards from '../components/cards/CardBox';
import ReactData from '../Data/ReactData';

const ReactJS = () => {
    return (
        <>
        <section className="home-section open">
            <div className="text">React JS</div>
            <div className="card">
            {ReactData.map((value) => {
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

export default ReactJS
