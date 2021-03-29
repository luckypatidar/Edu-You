import React from 'react'
import './Card.scss'
import Card from './Card'


export default (props) => {
    return (
        <>
            <div className="division">
                <section id="sec" style={{ textDecoration: "none" }}>
                    <h2>Choose Your Category</h2>
                    <ul>
                        <Card title="Division-1" id="1" description="1-5" />
                        <Card title="Division-2" id="2" description="6-10" />
                        <Card title="Division-3" id="3" description="11-12" />
                        <Card title="Division-4" id="4" description="BTech/BCOM" />
                        <Card title="Division-5" id="5" description="Others " />

                    </ul>
                </section>
            </div>
        </>
    )
}