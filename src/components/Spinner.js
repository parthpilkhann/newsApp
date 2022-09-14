import React from 'react'

export default function Spinner() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border m-5" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    )
}
