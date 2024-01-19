import React from 'react';


export type AppProps = {};

const App: React.FC<AppProps> = (props) => {
    const {} = props;

    return (
        <div>
            AppComponent
        </div>
    );
};

export default React.memo(App);