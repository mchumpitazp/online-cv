type Props = {
    word: string,
    section: string
}

function LetterWrap ({ word, section }: Props) {
    let wordArray = word.split("");
    let delay = -20;

    const characters = wordArray.map((char: string, index: number) => {
        const uniqueKey = `${section}-${word}-${index}`;
        if (char === ' ') return (<div key={uniqueKey}>&nbsp;</div>);

        delay += 20;
        return (
            <span className="letter-wrap__char" key={uniqueKey}>
                <span className="letter-wrap__char-inner" data-letter={char}
                    style={{'transitionDelay': `${delay}ms`}}>
                    {char}
                </span>
            </span>
        );
    });

    return (
        <span className="letter-wrap__word">
            {characters}
        </span>
    )
}

export default LetterWrap;