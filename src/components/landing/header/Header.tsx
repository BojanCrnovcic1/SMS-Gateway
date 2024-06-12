import './header.scss';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <div className='title'>
                 <h1>Ovde je sada neki opis cijele ponude kao naslov neki</h1>
                 <h4>Ovde je jos dodatnih informacija</h4>
            </div>            
            <div className='header-left-more'>
                <div className='header-buttons'>
                    <button type='button'>start now</button>
                </div>
                <div className='more-info'>
                    <p>Neke dodatne poruke u slucaju koliko korinsika i toliko</p>
                </div>
            </div>
        </div>
        <div className='header-right'>
            <div className='image'>
               <img src="./public/Mobileee.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header;