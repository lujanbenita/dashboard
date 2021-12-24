import { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from "react-redux";

import MainLayout from "./layout/mainLayout"

function App() {
  const themeChoice = useSelector(state => state.user.theme)
  const [theme, setTheme] = useState(themeChoice)

  useEffect(() => {
    setTheme(themeChoice)
  }, [themeChoice])
  
  // Create a client
  const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       retry: 0,
       refetchOnWindowFocus: false,
     },
   },
 })

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout theme={theme}/>
    </QueryClientProvider>
  )
}

export default App
