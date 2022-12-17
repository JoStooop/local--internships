import './App.css'
import {Test} from "./errorBoundary/Test";
import {TestTwo} from "./reactMemo/TestTwo";
import React from "react";
import {QueryClient, QueryClientProvider, useMutation, useQuery} from 'react-query'
import TestFour from "./react-query/TestFour.jsx";

const queryClient = new QueryClient()


const ErrorButton = React.lazy(() => import('./errorBoundary/ErrorButton.jsx'))


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="card">
          <Test/>
        </div>
        <div className="card">
          <TestTwo/>
        </div>
        <div className="card">
          <React.Suspense fallback={<h2>loading</h2>}>
            <ErrorButton/>
          </React.Suspense>
        </div>
        <div className="card">
          {/*<TestFour />*/}
          <Example/>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App


const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

const postPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      Name: 'Max',
      Age: '22'
    })
  })
    .then(res => res.json())
}


function Example() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['repoData'],
    queryFn: getPosts
  })

  const mutation = useMutation({
    mutationFn: postPosts
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {data.map(el => <div key={el.id}>{el.title}</div>)}
      <div className="card">
        <button
          onClick={() => {
            mutation.mutate()
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  )
}
