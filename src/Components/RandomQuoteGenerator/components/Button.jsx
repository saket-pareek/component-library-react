function Button({ children, loading, generateQuote }) {
    return <button disabled={loading} onClick={generateQuote}
        className="btn" id="btn">{children}</button>
}

export default Button;
