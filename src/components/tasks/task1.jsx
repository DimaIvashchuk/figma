import React, { useState } from 'react'
import '../../scss/task1.scss'
import { List } from './list'

export const Task1 = (props) => {
    const [isTeacher, setIsTeacher] = useState(false)
    const [isStudent, setIsStudent] = useState(false)

    const radioHandler = e => e.target.name === "teacher" ? setIsTeacher(!isTeacher) : setIsStudent(!isStudent)

    const returnComponent = () => <List isTeacher={isTeacher} isStudent={isStudent}/>

    return(
        <div className="task">
            <div className="task__container">
                <input 
                    type="password" 
                    placeholder="password" 
                    className="password"
                    name="password"
                    onChange={(e) => {props.inputHandler(e)}}
                />
                <input 
                    type="password" 
                    placeholder="rpassword" 
                    className={"password " + props.style}
                    name="rpassword"
                    onChange={(e) => {props.inputHandler(e)}}
                />
                <div className="task__container-radio">
                    <div>
                        <span>
                            teacher
                        </span>
                        <input 
                            type="checkbox" 
                            className="radio" 
                            name="teacher"
                            onChange={(e) => {radioHandler(e)}}
                        />
                    </div>
                    <div>
                        <span>
                            student
                        </span>
                        <input 
                            type="checkbox" 
                            className="radio"
                            name="student" 
                            onChange={(e) => {radioHandler(e)}}
                        />
                    </div>
                </div>
                {returnComponent()}
            </div>
        </div>
    )
}