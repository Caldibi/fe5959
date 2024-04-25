import styles from "../components/Icon.module.scss"

export function Card({ Name, Title, Paragraph }) {
    return (
        <>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div  className={styles.Icon}>{Name}</div>
                        <h2 className="fs-4 fw-bold">{Title}</h2>
                        <p className="mb-0">{Paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )

}