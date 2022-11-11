import React from 'react'

export const ChatTableRight = () => {
    return (
        <>
            <div className='admin-chat-right col-9'>
                <div className='chat-right-header'>
                    <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1664099047/users/user-2.png" />
                    <div className='chat-header-title'>
                        <h6>ky anh</h6>
                        <p><i className="fa-solid fa-circle me-1"></i>online</p>
                    </div>
                </div>
                <div className='chat-right-content'>
                    <ul>
                        <li className='chat-admin-text'>
                            <div className='text-admin-content'>
                                <p className='text-chat'>ok</p>
                                <p className='text-chat'>no</p>
                                <p className='text-chat'>jassss</p>
                                <p className='text-time'> <i className="fa fa-check-double me-1"></i> 2022/12/10 12:34am</p>
                            </div>

                        </li>
                        <li className='chat-client-text'>
                            <div>
                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1664099047/users/user-2.png" className='img' />
                            </div>
                            <p className='text-chat'>ok</p>
                            <p className='text-chat'>no</p>
                            <p className='text-chat'>hey you</p>
                            <p className='text-time'> <i className="fa fa-check-double me-1"></i> 2022/12/10 12:34am</p>
                        </li>
                        <li className='chat-admin-text'>
                            <div className='text-admin-content'>
                                <p className='text-chat'>ok</p>
                                <p className='text-time'> <i className="fa fa-check-double me-1"></i> 2022/12/10 12:35am</p>
                            </div>
                        </li>
                        <li className='chat-client-text'>
                            <div>
                                <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1664099047/users/user-2.png" className='img' />
                            </div>
                            <p className='text-chat'>ok</p>
                            <p className='text-time'> <i className="fa fa-check-double me-1"></i> 2022/12/10 12:37am</p>
                        </li>
                        <li className='chat-admin-text'>
                            <div className='text-admin-content'>
                                <p className='text-chat'>ok</p>
                                <p className='text-chat'>no</p>
                                <p className='text-chat'>jassss</p>
                                <p className='text-time'> <i className="fa fa-check-double me-1"></i> 2022/12/10 12:39am</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='chat-right-send'>
                    <div className='chat-right-send-input'>
                        <input type="text" placeholder='Enter...' />
                    </div>
                    <i className="fa fa-paper-plane"></i>
                </div>
            </div>
        </>
    )
}
