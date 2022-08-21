import React from 'react'
import CssData from '../Data/CssData';
import Cards from '../components/cards/CardBox';


const Css = () => {
    return (
        <>
        <section className="home-section">
            <div className="text">Css</div>
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
