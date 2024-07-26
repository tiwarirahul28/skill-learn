import React from 'react'
import Title from '../components/Title/Title'
import Cards from '../components/cards/CardBox';
import PhpData from '../Data/PhpData';

const Php = () => {
    return (
        <>
        <section className='home-section'>
            <Title
                Title="WordPress"
            />
            <div className="card">
                {PhpData.map((value)=>{
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

export default Php
