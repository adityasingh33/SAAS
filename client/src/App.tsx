import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home.tsx'
import Pricing from './pages/Pricing.tsx'
import Projects from './pages/Projects.tsx'
import MyProject from './pages/MyProject.tsx'
import Preview from './pages/Preview.tsx'
import Community from './pages/Community.tsx'
import View from './pages/View.tsx'
import Navbar from "./components/Navbar.tsx";


const App = () => {
    const {pathname} = useLocation()

    const hideNavbar = pathname.startsWith('/projects/') && pathname !== '/projects' || pathname.startsWith('/view/') || pathname.startsWith('/preview/')

    return (
        <div>

            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/pricing' element={<Pricing/>}></Route>
                <Route path='/projects/:projectId' element={<Projects/>}></Route>
                <Route path='/projects' element={<MyProject/>}></Route>
                <Route path='/preview/:projectId' element={<Preview/>}></Route>
                <Route path='/preview/:projectId/:versionId' element={<Preview/>}></Route>
                <Route path='community' element={<Community/>}></Route>
                <Route path='/view/:projectId' element={<View/>}></Route>
            </Routes>

        </div>


    )
}

export default App
