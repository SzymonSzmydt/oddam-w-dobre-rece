import "./css/btn.css";

export function SmallBtn({ name, onClick }) {

    return (
        <div className="btn small" onClick={onClick}> { name } </div>
    )
}