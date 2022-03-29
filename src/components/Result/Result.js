function Result({ status }) {
    if (status === 1) return <><span className="resultText">Ничья!</span></>;
    if (status === 2) return <><span className="resultText">Победитель Х!</span></>;
    if (status === 3) return <><span className="resultText">Победитель 0!</span></>;
    
    return "";
}

export default Result;