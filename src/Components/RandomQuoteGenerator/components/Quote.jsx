function Quote({ quoteText, authorText }) {
    return (
        <>
            <h2 className="quote mt-[20px]">
                <span id="quote">{quoteText}</span>
            </h2>
            <p className="author" id="author">{authorText}</p>
        </>
    )
}

export default Quote