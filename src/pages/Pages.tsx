import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from '@/layouts/PageLayout/PageLayout.tsx';
import HomePage from '@/pages/Home/HomePage.tsx';


export type PagesProps = {};

const Pages: React.FC<PagesProps> = (props) => {
    const {} = props;

    return (
        <Routes>
            <Route path={ '/*' } element={ <PageLayout/> }>
                <Route path={ '*' } element={ <HomePage/> }/>
            </Route>
        </Routes>
    );
};

export default React.memo(Pages);