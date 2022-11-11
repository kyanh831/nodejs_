import React from 'react'
import { ChatTableLeft } from './ChatTableLeft'
import { ChatTableRight } from './ChatTableRight'

export const AdminChatContent = () => {
    return (
        <>
            <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
                <div className='admin-user-heard'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/admin"><i className="fa-solid fa-house ms-2"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Chat client</li>
                        </ol>
                    </nav>
                </div>
                <div className='admin-user-content container'>
                    <div className='admin-chat row'>
                        {/* chat left */}
                        <ChatTableLeft />
                        {/* chat right */}
                        <ChatTableRight/>
                    </div>
                </div>

            </div>
        </>
    )
}
