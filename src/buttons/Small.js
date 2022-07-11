import "./css/small.css";

export function Small({ name, onClick }) {

    return (
        <div className="btn" onClick={onClick}> { name } </div>
    )
}