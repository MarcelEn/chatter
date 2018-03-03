import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loader = (props) => (
    <div>
        <BounceLoader 
            color={'#00ff00'}
            size={100}
        />
    </div>
)

export default Loader;