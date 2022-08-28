import React from 'react'
import Cards from '../components/cards/CardBox'
import Title from '../components/Title/Title'
import GData from '../Data/GData'

const Git = () => {
    return (
        <>
        <section className="home-section open">
            <Title
                Title="Advanced JavaScript"
            />
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
