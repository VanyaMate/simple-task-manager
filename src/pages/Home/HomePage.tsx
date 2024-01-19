import React from 'react';


export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
    const {} = props;

    return (
        <div>
            HomePageComponent
        </div>
    );
};

export default React.memo(HomePage);