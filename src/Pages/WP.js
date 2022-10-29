import React from 'react'
import Title from '../components/Title/Title'
import Cards from '../components/cards/CardBox';
import WPData from '../Data/WPData';

const WP = () => {
    return (
        <>
        <section className='home-section'>
            <Title
                Title="WordPress"
            />
            <div className="card">
                {WPData.map((value)=>{
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

export default WP
