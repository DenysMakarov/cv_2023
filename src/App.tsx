import React, {FC, FunctionComponent} from 'react';
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";



const App: FC = (): JSX.Element => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
    );
};

export default App;


// https://icons8.com/icon/set/vue-js/color
//https://pinetools.com/invert-image-colors
//https://iconscout.com/icons/css-logo
//<a href="https://iconscout.com/icons/typescript" target="_blank">Typescript Logo Icon</a> by <a href="https://iconscout.com/contributors/icon-54">Icon 54</a> on <a href="https://iconscout.com">IconScout</a>
