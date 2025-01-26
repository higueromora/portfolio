

export const EmailContact = ({ email }) => {
    return (
        <div className='container-email'>
            <div className='title-email'>
                <h1>angelmoradev@gmail.com </h1>

            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a className='contact-button' href="mailto:angelmoradev@gmail.com">
                    Click here to contact me
                </a>
                <img loading='lazy' src={email} alt="email icon" />
            </div>
        </div>
    )
}
