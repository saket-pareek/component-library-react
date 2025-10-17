
import { useEffect, useReducer } from 'react';
import './RandomQuoteGenerator.scss';
import { RandomQuoteProvider, useRandomQuote } from './contexts/RandomQuoteGeneratorContext';

import Heading from './components/Heading';
import Quote from './components/Quote';
import Button from './components/Button';




function RandomQuoteGenerator() {
  async function generateQuote() {
    try {
      dispatch({ type: 'quoteLoading' })
      const res = await fetch('https://api.quotable.io/random');
      if (!res.ok) throw new Error('An error happened');
      const data = await res.json();
      dispatch({ type: 'quoteLoaded', payload: data })
    } catch (err) {
      dispatch({ type: 'error', payload: err.message });
    }
  }

  useEffect(() => {
    generateQuote();
  }, []);

  const quoteText = error ? `${error}, try again later` : loading ? 'Updating...' : content;
  const authorText = error ? error : loading ? 'Updating...' : `- ${author}`;
  const btnText = loading ? 'Loading...' : 'Get a quote';

  return (
    <RandomQuoteProvider>
      <div className="random-quote-generator">
        <Heading />
        <Quote quoteText={quoteText} authorText={authorText} />
        <Button loading={loading} generateQuote={generateQuote}>{btnText}</Button>
      </div>
    </RandomQuoteProvider>
  );
}

export default RandomQuoteGenerator;
