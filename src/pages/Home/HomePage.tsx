import React from 'react';


export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
    const {} = props;

    return (
        'HomePage'
    );
};

export default React.memo(HomePage);