import "./css/btn.css";

export function BigBtn({ name, onClick }) {

    return (
        <div className="btn big" onClick={onClick}> { name } </div>
    )
}