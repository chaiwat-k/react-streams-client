import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne<br />
            <a href="/pagetwo">Navigate to PageTwo</a>
        </div>
    );
};
const PageTwo = () => {
    return (
        <div>
            PageTwo<br />
            <a href="/">Navigate to PageOne</a>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;