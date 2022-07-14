import React from 'react'
import HtmlData from '../Data/HtmData';
import Cards from '../components/cards/CardBox';

const Html = () => {
    return (
        <>
        <section className='home-section'>
            <div className="text">HTML</div>
            <div className="card">
                {HtmlData.map((value) => {
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

export default Html
