import './App.css'
import { Route, Routes} from 'react-router-dom'
import { HomePage } from '../pages/Homepage/HomePage'
import { BlogPage } from '../pages/Blogpage/BlogPage'
import { ExplorePage } from '../pages/ExplorePage/ExplorePage'
import { AboutPage } from '../pages/AboutPage/AboutPage'
import ExploreContents from '../pages/ExplorePage/ExploreContents'



function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Explore" element={<ExplorePage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/Explore/:tribe" element={<ExploreContents />} />
				
			</Routes>
		</div>

	)
}

export default App
