import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"

import { ContextProvider } from "./Context"
import App from "./App"

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);
