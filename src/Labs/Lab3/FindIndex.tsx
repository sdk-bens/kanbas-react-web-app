let numberArray1 = [1, 2, 4, 5, 6];
let stringArray1 = ["string1", "string3"];


const fourIndex = numberArray1.findIndex(a => a === 4);
const stringIndex = stringArray1.findIndex(a => a === "string3");

export default function FindIndex () {
    return (
        <div id="wd-find-index-function">
        <h4>FindIndex function</h4>
        fourIndex = {fourIndex} <br />
        string3Index = {stringIndex} <hr />
    </div>
    );
}