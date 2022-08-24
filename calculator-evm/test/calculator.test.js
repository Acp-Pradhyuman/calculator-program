const Calculator = artifacts.require("Calculator");

require('chai').use(require('chai-as-promised')).should()

contract('Calculator', ([a0, a1, a2, a3, a4, a5]) => {
    describe("Carrying out addition, subtraction, multiplication and division on two numbers", function () {
        it("should add two numbers", async function () {
          let calculator = await Calculator.new()
          let add = await calculator.add(1,2);
          console.log("1 + 2 = ", add.toString())
        })

        it("should subtract two numbers", async function () {
            let calculator = await Calculator.new()
            let sub = await calculator.sub(5,9);
            console.log("5 - 9 = ", sub.toString())
        })

        it("should multiply two numbers", async function () {
            let calculator = await Calculator.new()
            let mul = await calculator.mul(8,5);
            console.log("8 * 5 = ", mul.toString())
        })

        it("should divide two numbers", async function () {
            let calculator = await Calculator.new()
            let div = await calculator.div(8,5);
            const { result, rem } = div
            console.log("8 / 5 = ", result.toString())
            console.log("8 % 5 = ", rem.toString())
        })
    })
})


