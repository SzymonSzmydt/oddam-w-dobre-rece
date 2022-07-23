import "./css/btn.css";

export function SmallBtn({ name, onClick }) {

    return (
        <div className="small" onClick={onClick}> { name } </div>
    )
}