import { useState } from "react";

export default function StateComponent(): JSX.Element {
    let str = "Hello World";

    const [stateStr, setStateStr] = useState<string>("Hello World");

    return (
        <>
            <h2>Exercise 7</h2>
            <span>No State String: {str}</span>
            <span>State String: {stateStr}</span>
            <button onClick={() => {
                str = "New No State String";
                setStateStr("New State String");
            }}>
                Click Me
            </button>
        </>
    )
};