import React from 'react'
import HtmlData from '../Data/HtmData';
import Cards from '../components/cards/CardBox';
import Title from '../components/Title/Title';

const Html = () => {
    return (
        <>
        <section className='home-section'>
            <Title
                Title="Html"
            />
            <div className="card">
                {HtmlData.map((value) => {
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

export default Html
