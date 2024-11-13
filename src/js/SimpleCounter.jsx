import React from "react"
import { Card } from "./component/card.jsx";
const SimpleCounter = ({ counter }) => {
    const digit = counter.toString().padStart(6, "0")

    return (

        <div className="container d-flex justify-content-center">
            {digit.split("").map((digito, index) => (
                <div className="m-2"
                    key={index}>
                    <Card digito={parseInt(digito)} />
                </div>

            ))}

        </div>

    )
}
export default SimpleCounter