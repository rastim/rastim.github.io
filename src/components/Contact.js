import React from 'react';

const Contact = (props) => {
    console.log(props)
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    return (
        <div className="container">
            <h4>Contact</h4>
            <p>Contact Page ~ Materialize comes in two different forms. You can select which version you want depending on your preference and expertise. To start using Materialize, all you have to do is download one of the options below.</p>
        </div>
    )
}

export default Contact;