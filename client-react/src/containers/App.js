import React from 'react';
import MyViews from '../router/index';
import Routes from '../router/views';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MyViews routes={Routes} />
            </BrowserRouter>
        </div>
    );
}

export default App;
