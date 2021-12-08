import { Fragment, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"
import { onAuthStateChanged } from "@firebase/auth"
import "./App.css"

function App() {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // user has logged in...
        dispatch({ type: "SET_USER", user: authUser })
      } else {
        // user has logged out...
        dispatch({ type: "SET_USER", user: null })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header />
                <Checkout />
              </Fragment>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
