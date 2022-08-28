import React from 'react';
import Cards from '../components/cards/CardBox';
import Title from '../components/Title/Title';
import NextData from '../Data/NextData';

const NextJS = () => {
    return (
        <>
        <section className="home-section open">
            <Title
                Title="Next JS"
            />
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
