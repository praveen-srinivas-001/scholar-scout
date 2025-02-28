import { useState } from "react"

function Brand() {
    var [theme, setTheme] = useState(false);
    var styling = {
        backgroundColor : theme ? '#3367d6':'white',
        color: theme ? 'white': '#3367d6'
    };
    return (
        <div className="brand" style={styling}>
            <h1>Scholar Scout</h1>
            <button onClick={() => setTheme(!theme)}>theme</button>
        </div>
    )
}

export default Brand;