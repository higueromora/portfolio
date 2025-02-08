

export const EmailContact = ({ osito }) => {
    return (
        <div className='container-email'>
            <img loading='lazy' src={osito} alt="Hola" />
            <div className='title-email'>
                <h1>angelmoradev@gmail.com </h1>

            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a className='contact-button' href="mailto:angelmoradev@gmail.com">
                    Contáctame
                </a>
            </div>
        </div>
    )
}
