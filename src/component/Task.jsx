import { useState } from "react";

export default function Task({task}) {

    const [isEditing, setIsEditing] =useState(false);

    const taskConent= isEditing ? (
        <>
        <input type="text" />
        <button onClick={()=> setIsEditing(false)}> Save</button>

        </>
    ):( <>
        {task.text}
        <button onClick={()=> setIsEditing(true)}> Edit </button>
        </>)


    return(
        <>
        <input type="checkbox" />

        {taskConent}

        {/* {task.text}
        <button> Edit </button> */}

        {/* <input type="text" />
        <button> Save</button> */}


        <button> Delete </button>
        </>
    );
}

