import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState('')

    // From context get the functions and data
    const {users, searchUsers, clearUsers} = useContext(GithubContext)

    const inputChangeHandler = (e) => setText(e.target.value)
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        if(text === '') {
            alert('Please enter something')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        clearUsers()
    }

    return (
        <div className="grid grid-cols-1 xl:grid-flow-cols-2 lg:grid-cols-2 mf:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <div className="relative">   
                            <input 
                            type="text" 
                            className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                            placeholder='Search'
                            value={text}
                            onChange={inputChangeHandler}
                            />
                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
                {users.length > 0 && (
                    <div>
                        <button onClick={onClickHandler} className="btn btn-ghost btn-lg">
                        Clear
                        </button>
                    </div>
                )}
        </div>
    )
}

export default UserSearch