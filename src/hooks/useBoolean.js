import  { useState } from 'react';

function useBoolean (init) {
    const [isTrue, setIsTrue] = useState(init);
    function truthHandler (value) {
        setIsTrue(value);
    }

    return {
        isTrue,
        truthHandler
    }
}

export default useBoolean;