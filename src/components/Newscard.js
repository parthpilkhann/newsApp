import React from 'react'

export default function Newscard(props) {
    return (
        <div>
            <div className="col my-3">
                <div className="card h-100">
                    <img src={props.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm stretched-link">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
