import React, {PureComponent} from 'react';

import Header from './header/Header';

class Home extends PureComponent {
    render() {
        return (
            <div className="campaign">
                <Header />
            </div>
        )
    }
}


export default Home