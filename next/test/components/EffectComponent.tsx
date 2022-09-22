import { useState, useEffect } from "react";

export default function StateComponent(): JSX.Element {
    const [stateStr, setStateStr] = useState<string>("Hello World");
    
    const [buttonClicked, setButtonClicked] = useState<boolean>(false);
    
    return (
        <>
            <h2>Exercise 8</h2>
            <button onClick={() => {
                setStateStr("New State String");
            }}>
                Click Me
            </button>
            {buttonClicked &&
                <p>Button was Clicked</p>
            }
        </>
    )
};