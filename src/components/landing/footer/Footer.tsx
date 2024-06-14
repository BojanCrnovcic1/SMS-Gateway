import './footer.scss';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-items'>
                <div className='footer-item'>
                    <h2>Resources</h2>
                    <div className='footer-content'><a href='#pricing'>price</a></div>
                </div>
                <div className='footer-item'>
                    <h2>Developers</h2>
                    <div className='footer-content'>
                         <a href='https://github.com/BojanCrnovcic1/SMS-Gateway'><img src="./public/iconmonstr-github-3.svg" alt="" /></a>
                    </div>
                </div>
                <div className='footer-item'>
                    <h2>Company</h2>
                    <div className='footer-content'><a href='#aboutAs'>about</a></div>
                </div>
            </div>
        </div>
        <div className='footer-title'>
            <div className='copy'>
                 <p>@Copyright 2024.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;