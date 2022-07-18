

export function OrganizationsList({ title, text, address }) {

    return (
        <div className="org-list">
            <div>
                <p className="org-title"> { title }</p>
                <p className="org-text"> { text } </p>
            </div>
            <div className="org-address">
                { address }
            </div>
        </div>
    )
}