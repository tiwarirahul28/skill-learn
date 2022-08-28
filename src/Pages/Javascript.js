import React from 'react'
import JData from '../Data/JData';
import Cards from '../components/cards/CardBox';
import Title from '../components/Title/Title';

const Javascript = () => {
    return (
        <>
        <section className="home-section open">
            <Title
                Title="JavaScript"
            />
            <div className="card">
                {JData.map((value) => {
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

export default Javascript
