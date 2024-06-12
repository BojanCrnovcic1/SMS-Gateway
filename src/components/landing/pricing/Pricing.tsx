import './pricing.scss'

const Pricing = () => {
  return (
    <div className='pricing' id='pricing'>
        <div className='pricing-container'>
            <div className='pricing-title'>
                <h1>Pricing</h1>
                <div className='pricing-description'>
                    <h4>Neki text popratni koji ce da objasnjava nesto bilo sta</h4>
                </div>
                
            </div>
            
            <div className='items'>
                <div className='item'>
                    <div className='item-heading'>
                        <h1>Pro</h1>
                        <p>Kratki opis ove usluge</p>
                    </div>
                    <div className='item-pricing'>
                        <h1>$20</h1>
                        <p>potrebna kartinca</p>
                    </div>
                    <div className='item-button'>
                        <button type='button'>Start new</button>
                    </div>
                    <div className='more-price-info'>
                        <p>Poruka dodatna</p>
                        <p>Poeuka dodatna</p>
                        <p>Poruka dodatna</p>
                    </div>
                </div>

                <div className='item'>
                    <div className='item-heading'>
                        <h1>Ultra</h1>
                        <p>Kratki opis ove usluge</p>
                    </div>
                    <div className='item-pricing'>
                        <h1>$30</h1>
                        <p>potrebna kartinca</p>
                    </div>
                    <div className='item-button'>
                        <button type='button'>Start new</button>
                    </div>
                    <div className='more-price-info'>
                        <p>Poruka dodatna</p>
                        <p>Poeuka dodatna</p>
                        <p>Poruka dodatna</p>
                    </div>
                </div>

                <div className='item'>
                    <div className='item-heading'>
                        <h1>Pro-ultra</h1>
                        <p>Kratki opis ove usluge</p>
                    </div>
                    <div className='item-pricing'>
                        <h1>$40</h1>
                        <p>potrebna kartinca</p>
                    </div>
                    <div className='item-button'>
                        <button type='button'>Start new</button>
                    </div>
                    <div className='more-price-info'>
                        <p>Poruka dodatna</p>
                        <p>Poeuka dodatna</p>
                        <p>Poruka dodatna</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing;