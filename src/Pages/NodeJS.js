import React from 'react'
import Cards from '../components/cards/CardBox';
import Title from '../components/Title/Title';
import NodeData from '../Data/NodeData';

const NodeJS = () => {
    return (
        <>
        <section className="home-section open">
            <Title
                Title="Node JS"
            />
            <div className="card">
            {NodeData.map((value) => {
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

export default NodeJS
