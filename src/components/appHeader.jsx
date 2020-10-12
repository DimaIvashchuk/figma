import React from 'react'
import '../scss/appHeader.scss'

export const AppHeader = () => {
    return(
        <div className="header">
            <div className="header__name">EXPOFORUM</div>
            <div className="header__nav">
                <ul>
                    <li>О комплексе</li>
                    <li>О компании</li>
                    <li>Новости</li>
                    <li>Медиа-банк</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="header__service">
                <div className="header__service-search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="header__service-language">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    <span>English</span>
                </div>
            </div>
        </div>
    )
}