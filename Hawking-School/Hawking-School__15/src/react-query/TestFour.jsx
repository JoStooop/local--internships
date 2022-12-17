import React from 'react';
import {useQuery} from 'react-query'

const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

const TestFour = () => {
  const {isLoading, error, data} = useQuery({
    queryKey: ['repoData'],
    queryFn: getPosts
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data)
  return (
    <div>
    </div>
  )
};

export default TestFour;
