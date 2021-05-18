import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  let [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          res.json()
        } else {
          setLoading(false)
          setIsError(true)
        }
      })
      .then((data) => {
        setUser(data.login)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  if (loading) {
    return <h2>multiple</h2>
  }
  if (isError) {
    return <h2>error</h2>
  }
  return <h2>{user}</h2>
}

export default MultipleReturns
