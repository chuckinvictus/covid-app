import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import GlobalStyle from './Components/GlobalStyle';
import Pages from './Pages/App';

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Pages />
        </Fragment>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));