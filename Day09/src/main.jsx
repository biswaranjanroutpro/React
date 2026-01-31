import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Form'
import ZodForm from './ZodForm'


createRoot(document.getElementById('root')).render(

    <ZodForm />

)
