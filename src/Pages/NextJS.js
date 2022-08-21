import React from 'react';
import Cards from '../components/cards/CardBox';
import NextData from '../Data/NextData';

const NextJS = () => {
    return (
        <>
        <section className="home-section open">
            <div className="text">Next JS</div>
            <div className="card">
            {NextData.map((value) => {
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

export default NextJS
