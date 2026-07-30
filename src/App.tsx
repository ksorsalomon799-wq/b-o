import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/church/Header'
import { HomePage } from './components/church/HomePage'
import { NewsPage } from './components/church/NewsPage'
import { ArticleDetailPage } from './components/church/ArticleDetailPage'
import { MediaPage } from './components/church/MediaPage'
import { EventsPage } from './components/church/EventsPage'
import { Footer } from './components/church/Footer'
import './App.css'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-[#fafafa] text-slate-800">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<ArticleDetailPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App