import React from 'react'
import Cards from '../components/cards/CardBox'
import GData from '../Data/GData'

const Git = () => {
    return (
        <>
        <section className="home-section open">
            <div className="text">Advanced JavaScript</div>
            <div className="card">
                {GData.map((value) => {
                    return(
                        <Cards 
                            img={value.img}
                            heading={value.heading}
                            authImg={value.authImg}
                            authName={value.authName}
                            authLink={value.authLink}
                        />
                    )
                })}
            </div>
        </section> 
        </>
    )
}

export default Git
