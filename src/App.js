import { CssBaseline } from '@mui/material';
import './App.css';
import Layout from './components/Layout/Layout';
import Pagination from './components/Pagination/Pagination';
import SiteRoutes from './components/Routes/SiteRoutes';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Layout>
                <SiteRoutes />
            </Layout>
            <Pagination />
        </div>
    );
}

export default App;
