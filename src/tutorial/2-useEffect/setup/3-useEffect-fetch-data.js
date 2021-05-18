import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [user, setUser] = useState([])

  const getData = async () => {
    const resp = await fetch(url)
    // console.log(resp)
    const users = await resp.json()
    console.log(users)
    setUser(users)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h3>github user</h3>
      <ul className='users'>
        {user.map((person) => {
          const { id, login, avatar_url, html_url } = person
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
