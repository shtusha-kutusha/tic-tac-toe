function NextMove({ move }) {
    const nextMove = move % 2 !== 0 ? "X" : "0";

    return nextMove;
}

export default NextMove;