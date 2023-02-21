import React, { createContext } from 'react';

interface MyObj {
	isClicked: boolean;
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModelContext = createContext<MyObj>({
	isClicked: false,
	setIsClicked: () => {}
});
