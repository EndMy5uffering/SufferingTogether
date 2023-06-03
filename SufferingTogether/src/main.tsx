import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VideoSelection } from './pages/videoselection/videoselection'
import { Login } from './pages/login/login'
import { VideoStream } from './pages/videostream/videostream'
import { Settings } from './pages/settings/settings'
import { NoPage } from './pages/nopage/nopage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<VideoSelection />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/videostream" element={<VideoStream />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="*" element={<NoPage />}></Route>
    </Routes>
  </BrowserRouter>
)
