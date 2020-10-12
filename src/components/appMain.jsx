import React from 'react'
import '../scss/appMain.scss'

export const AppMain = () => {
    return (
        <div className="main">
            <div className="main__firstsector">
                <div className="main__firstsector-content">
                    <div className="main__firstsector-content-name">ЭКСПОФОРУМ</div>
                    <div className="main__firstsector-content-description">конгрессно-выставочный центр Санк-Петербурга</div>
                    <div className="main__firstsector-content-info">
                        <span>О комплексе</span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="main__secondsector">
                <div className="main__secondsector-content">
                    <ul className="main__secondsector-content-listone">
                        <li>
                            <div className="content">
                                <span>Календарь мероприятий</span>
                                <div className="more">
                                    <span>Подробнее</span> 
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <span>Как добраться до Экспофорума</span>
                                <div className="more">
                                    <span>Подробнее</span> 
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="main__secondsector-content-listtwo">
                        <li>
                            <div className="content">
                                <span>Онлайн-заявка на организацию мероприятия</span>
                                <div className="more">
                                    <span>Подробнее</span> 
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <span>План и инфраструктура комплекса</span>
                                <div className="more">
                                    <span>Подробнее</span> 
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}