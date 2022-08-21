import React from 'react'
import Cards from '../components/cards/CardBox';
import MongoDDBData from '../Data/MongoDBData';

const MongoDB = () => {
    return (
        <>
        <section className="home-section open">
            <div className="text">MongoDB</div>
            <div className="card">
            {MongoDDBData.map((value) => {
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

export default MongoDB
