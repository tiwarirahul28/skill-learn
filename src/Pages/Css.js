import React from 'react'
import CssData from '../Data/CssData';
import Cards from '../components/cards/CardBox';
import Title from '../components/Title/Title';


const Css = () => {
    return (
        <>
        <section className="home-section">
            <Title
                Title="Css"
            />
            <div className="card">
                {CssData.map((value) => {
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

export default Css
