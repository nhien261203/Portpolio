import React from 'react'
import '../Contact/Contact.scss'

function Contact() {
    return (
        <section className="ContactContainer" id="contact">
            <h1 className='sectionTitle'>Contact</h1>
            <form action="">
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input type="text"
                        name="name"
                        id="name"
                        placeholder='Name'
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="text"
                        name="email"
                        id="email"
                        placeholder='Email'
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea type="text"
                        name="message"
                        id="message"
                        placeholder='Message'
                        required
                    />
                </div>
                <input className="hover btn" type="submit" value="Submit" />
            </form>
            <h1>Xin chao</h1>
        </section>
    )
}

export default Contact