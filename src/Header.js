import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

function header() {
  return (
    <div className='header'>
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='logo'/>
        {/* https://i.ibb.co/GW0DYCQ/amazon-logo.png */}
        <div className="header__search">
            <input className="header__searchInput" type="text"/>
            <FontAwesomeIcon icon={faSearch} className='header__searchIcon'/>
            {/* Logo */}
        </div>

        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">
                    Hello Guest
                </span>
                <span className="header__optionLineTwo">
                    Sign In
                </span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">
                    Returns
                </span>
                <span className="header__optionLineTwo">
                    & Orders
                </span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">
                    Your
                </span>
                <span className="header__optionLineTwo">
                    Prime
                </span>
            </div>

            <div className='header__optionBasket'>
                <FontAwesomeIcon icon={faShoppingBasket}/>
                <span className="header__optionLineTwo header__basketCount">
                    0
                </span>
            </div>

            
        </div>
    </div>
  )
}

export default header