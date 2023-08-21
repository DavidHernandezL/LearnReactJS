import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  const CAT_PREFIX_URL = `https://cataas.com`
  const [imageUrl, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const threeWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeWord}?json=true`)
      .then(response => response.json())
      .then(data => {
        setImage(data.url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}