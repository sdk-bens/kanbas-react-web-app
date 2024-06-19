const subtract = (a: number, b: number) => {
    return a -b;
};

export default function ArrowFunctions() {
    const threeMinsOne = subtract(3, 1);
    console.log(threeMinsOne);
    return (
        <div id="wd-arrow-functions">
            <h4>New ES6 arrow function</h4>
            threeMinsOne = {threeMinsOne} <br />
            subtract(3, 1) = {subtract(3, 1)} <hr />
        </div>
    );
}