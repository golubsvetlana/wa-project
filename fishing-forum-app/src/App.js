import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import './components/scss/media-mixins.scss';

import './App';
import { Header } from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import { Blog } from './components/Blog.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { SignPage, LoginPage } from './components/SignUp.jsx';
import { FaqPage } from './components/FAQ.jsx';

import { postArray } from './components/Array.jsx';
import {
    Article0,
    Article1,
    Article2,
    Article3,
    Article4,
    Article5,
} from './components/Article.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <header>
                <Header />
            </header>
            <main>
                <Switch>
                    <Route exact path="/signup">
                        <SignPage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path={postArray[0].linkMain}>
                        <Article0 />
                    </Route>
                    <Route exact path={postArray[1].linkMain}>
                        <Article1 />
                    </Route>
                    <Route exact path={postArray[2].linkMain}>
                        <Article2 />
                    </Route>
                    <Route exact path={postArray[3].linkMain}>
                        <Article3 />
                    </Route>
                    <Route exact path={postArray[4].linkMain}>
                        <Article4 />
                    </Route>
                    <Route exact path={postArray[5].linkMain}>
                        <Article5 />
                    </Route>

                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/site-rules-faq">
                        <FaqPage />
                    </Route>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App;
