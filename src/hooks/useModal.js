import  { useState } from 'react';

function useModal() {
    const [modalState, setModalState] = useState(false);

    function modalStateHandler (state) {
        setModalState(state)
    }

    return {
        modalState,
        modalStateHandler
    }
}

export default useModal;