import { Outlet, Route, Routes } from 'react-router'
import CodeSplittingPage from '../pages/CodeSplittingPage'

const CodeSplittingRouter = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path="" Component={CodeSplittingPage} />
            </Route>
        </Routes>
    )
}

export default CodeSplittingRouter