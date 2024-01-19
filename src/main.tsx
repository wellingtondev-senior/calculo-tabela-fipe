import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import "./styles/globals.css"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { render } from 'react-dom'

function MyApp() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp

render(<MyApp />, document.getElementById('root'))