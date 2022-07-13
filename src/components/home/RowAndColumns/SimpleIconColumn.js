import "./css/simpleIconColumn.css";

export function SimpleIconColumn({ img, title, text }) {

    return (
        <div className="simple-column">
            <div className="simple-icon" style={img} />
            <p className="simple-title"> { title } </p>
            <div className="simple-text"> { text } </div>
        </div>
    )
}