import React, { useState } from "react";
import { Button, Container, Current, Previous, Screen } from "../Styles/Main";

function Calculator() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");

  const appendvalueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deletehandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allClearHandler = () => {
    setCurrent("");
    setPrevious("");
    setOperations("");
  };

  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value == undefined || value == null) return;
    setCurrent(value);
    setPrevious("");
    setOperations("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      <Container>
        <Screen>
          <Previous>
            {previous} {operations}
          </Previous>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} control onClick={allClearHandler}>
          AC
        </Button>
        <Button onClick={deletehandler}>DEL</Button>
        <Button data={"÷"} onClick={chooseOperationHandler} operation>
          ÷
        </Button>
        <Button data={7} onClick={appendvalueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendvalueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendvalueHandler}>
          9
        </Button>
        <Button data={"x"} onClick={chooseOperationHandler} operation>
          x
        </Button>
        <Button data={4} onClick={appendvalueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendvalueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendvalueHandler}>
          6
        </Button>
        <Button data={"+"} onClick={chooseOperationHandler} operation>
          +
        </Button>
        <Button data={1} onClick={appendvalueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendvalueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendvalueHandler}>
          3
        </Button>
        <Button data={"-"} onClick={chooseOperationHandler} operation>
          -
        </Button>
        <Button data={"."} onClick={appendvalueHandler} decimal>
          .
        </Button>
        <Button data={0} onClick={appendvalueHandler}>
          0
        </Button>
        <Button gridSpan={2} equals onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
}

export default Calculator;
