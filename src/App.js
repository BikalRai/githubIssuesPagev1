import { CssBaseline } from '@mui/material';
import './App.css';
import Layout from './components/Layout/Layout';
import SiteRoutes from './components/Routes/SiteRoutes';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Layout>
                <SiteRoutes />
            </Layout>
        </div>
    );
}

export default App;
