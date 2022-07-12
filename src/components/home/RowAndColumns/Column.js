export function Column({ stats, title, text}) {

    return (
        <div className="column">
            <p className="column-stats"> { stats } </p>
            <p className="column-title"> { title } </p>
            <p className="column-text"> { text } </p>
        </div>
    )
}