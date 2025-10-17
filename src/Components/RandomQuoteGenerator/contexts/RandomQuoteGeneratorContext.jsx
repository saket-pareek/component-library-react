import { createContext, useContext, useReducer } from "react";

const RandomQuoteContext = createContext();

const initialState = {
	quote: {},
	loading: false,
	error: null,
}


function reducer(state, action) {
	switch (action.type) {
		case 'quoteLoading':
			return {
				...state,
				loading: true,
				error: null
			}
		case 'quoteLoaded':
			return {
				...state,
				loading: false,
				quote: action.payload
			}
		case 'error':
			return {
				...state,
				loading: false,
				error: action.payload
			}
	}
}

function RandomQuoteProvider({ children }) {
	const [{ quote: { content, author }, loading, error }, dispatch] =
		useReducer(reducer, initialState);
	return <RandomQuoteContext.Provider value={{}}>
		{children}
	</RandomQuoteContext.Provider>
}

function useRandomQuote() {
	const quoteContext = useContext(RandomQuoteContext);
	if (quoteContext === undefined) throw new Error('RandomQuote context used outside of RandomQuote Provider')
	return quoteContext;
}

export { RandomQuoteProvider, useRandomQuote };