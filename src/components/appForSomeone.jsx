import React from 'react'
import '../scss/appForSomeone.scss'

export const AppForSomeone = () => {
    return(
        <div className="for">
            <div className="for__content">
                <div className="for__content-list">
                    <ul>
                        <li>Организаторам</li>
                        <li className="bordered">Документы организаторам</li>
                        <li>Услуги организаторам</li>
                        <li>Выставочные площади</li>
                        <li>Рестораны и кафе</li>
                        <li>Конгресс-центр</li>
                        <li>Спорт-центр</li>
                    </ul>
                </div>
                <div className="for__content-list">
                    <ul>
                        <li>Экспонентам</li>
                        <li>Общие условия участия</li>
                        <li>Услуги экспонентам</li>
                        <li>Документы экспонентам</li>
                        <li>Центр деловых контактов</li>
                        <li>Забронировать гостинницу</li>
                    </ul>
                </div>
                <div className="for__content-list">
                    <ul>
                        <li>Посетителям</li>
                        <li>Сервисы</li>
                        <li>Онлайн-регистрация на мероприятие</li>
                        <li>Забронировать гостинницу</li>
                        <li>Центр деловых контактов</li>
                    </ul>
                </div>
                <div className="for__content-list">
                    <ul>
                        <li>Прессе</li>
                        <li>Аккредитация</li>
                        <li>Пресс-служба</li>
                        <li>Правила аккредитации</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}