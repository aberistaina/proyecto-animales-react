import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { SnackbarProvider } from "notistack"
import { Provider } from 'react-redux'
import { store } from "./store/store"
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = "104320394955-k4nhb0dh1n5coeoh0ucsusm5knsv72sk.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
<Provider store= {store}>
    <StrictMode>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <SnackbarProvider maxSnack={4} autoHideDuration={2000}>
                <App />
            </SnackbarProvider>
        </GoogleOAuthProvider>
    </StrictMode>
</Provider>
)
