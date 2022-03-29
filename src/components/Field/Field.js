import Cell from "./Cell/Cell";

function Field({ field, updateField }) {
    return (
        <div className="field">
            {field.map((cell, index) => <Cell cell={cell} index={index} updateField={updateField} key={index} />)}
        </div>
    );
}

export default Field;