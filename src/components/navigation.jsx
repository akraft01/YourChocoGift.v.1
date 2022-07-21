export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          YourChocoGift
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Brands
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About Us
              </a>
            </li>
            
            <li>
              <a href='#testimonials' className='page-scroll'>
                Reviews
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Rating Progressbars
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='#' className='page-scroll' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://chimerical-taiyaki-a3ce42.netlify.app/';
      }}>
                Fr
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
