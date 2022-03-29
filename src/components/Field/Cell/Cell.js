function Cell({ cell, index, updateField }) {
    const cellSign =  cell === 'X' ? `activeCrossSign` : `activeZeroSign`;

    return (
        <div className={`cell ${cellSign}`} onClick={() => { if (cell === '') updateField(index); }}>
            {cell}
        </div>
    );
}

export default Cell;