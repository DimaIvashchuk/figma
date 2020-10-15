import React from 'react'

export const List = (props) => {
    if(props.isStudent === props.isTeacher === true) 
        return (
            <div className="list">
                choose something one
            </div>
        )
    return (
        <div className="list">
            {props.isStudent && "student"}
            {props.isTeacher && "teacher"}
        </div>
    )
}