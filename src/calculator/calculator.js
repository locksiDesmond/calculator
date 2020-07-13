import React from "react";
import Numbers from "./numbers";
import Output from "./output";
class Evaluate {
  foo(e) {
    const result = this.eval(e);
    return result;
  }
  eval(e) {
    //eslint-disable-next-line
    const answer = eval(e);
    return answer;
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      arithmetic: [],
      values: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.calculate2 = this.calculate2.bind(this);
    this.clean = this.clean.bind(this);
    this.findArithmetics = this.findArithmetics.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  componentDidMount() {
    window.addEventListener("keyup", e => this.handleKey(e));
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKey);
  }
  handleKey(e) {
    e.preventDefault();
    e.stopPropagation()
    const last = e.code;
    if (last === "Enter") {
      this.calculate2();
      debugger;
    } else {
      debugger;
      const lasts = last.length - 1;
      const lastitem = parseInt(last.charAt(lasts));
      if (!Number.isNaN(lastitem)) {
        const value = this.state.value + lastitem;
        const values = this.state.values + lastitem;
        this.setState({
          value: value,
          values: values
        });
      }
    }
  }

  handleClick2(i) {
    if (i === "clear") {
      this.setState({
        value: "",
        values: ""
      });
      return;
    }
    if (i === "=" || i === "Enter") {
      this.calculate2();
    }else if(typeof i == "number") {
      const value = `${this.state.value}${i}`;
      const values = `${this.state.values}${i}`;
      this.setState({
        value: value,
        values: values
      });
    }else{ switch (i) {
      case "times": {
        const value = `${this.state.value}x`;
        const values = `${this.state.values}*`;
        this.setState({
          arithmetic: [...this.state.arithmetic, "times"],
          value: value,
          values: values
        });
        break;
      }
      case "add": {
        const values = `${this.state.values}+`;
        const value = `${this.state.value}+`;
        this.setState({
          arithmetic: [...this.state.arithmetic, "add"],
          value: value,
          values: values
        });
        break;
      }
      case "subtract": {
        const value = `${this.state.value}-`;
        const values = `${this.state.values}-`;
        this.setState({
          arithmetic: [...this.state.arithmetic, "subtract"],
          value: value,
          values: values
        });
        break;
      }
      case "divide": {
        const value = `${this.state.value}/`;
        const values = `${this.state.values}/`;
        this.setState({
          arithmetic: [...this.state.arithmetic, "divide"],
          value: value,
          values: values
        });
        break;
      }
      case "open": {
        const value = `${this.state.value}(`;
        const values = `${this.state.values}(`;
        this.setState({
          arithmetic: [...this.state.arithmetic, "bracket"],
          value: value,
          values: values
        });
        break;
      }
      case "close": {
        const value = `${this.state.value})`;
        const values = `${this.state.values})`;
        this.setState({
          arithmetic: [...this.state.arithmetic, "bracket"],
          value: value,
          values: values
        });
        break;
      }
      case "X": {
        const lengthOfValue = this.state.value;
        const value = this.state.value.slice(0, lengthOfValue.length - 1);
        const values = this.state.value.slice(0, lengthOfValue.length - 1);
        this.setState({
          arithemetic: [...this.state.arithmetic, "bracket"],
          value: value,
          values: values
        });
        break;
      }
      default: {
      }
    }
  }
    
  }
  findArithmetics(array, value) {
    let index = 1;
    let counter = 0;
    for (let i = 0; i <= index; i++) {
      const element = array.indexOf(value);
      if (element === 0) {
        counter++;
        index++;
        debugger;
      }
    }
    return counter;
  }
  calculate2() {
    const evaluate = new Evaluate();
    const result = evaluate.foo(this.state.values);
    this.setState({
      value: result,
      values: result
    });
  }
  handleClick(i) {
    if (this.state.enter) {
      debugger;
      this.setState({
        values: 0,
        arithmetic: "",
        enter: false
      });
      return;
    }
    if (typeof i == "number") {
      let values = this.state.sum ? this.state.value : this.state.values;
      values = Number(values) * 10 + Number(i);
      if (!this.state.arithmetic) {
        console.log("false");
        this.setState({ value: values });
      } else {
        console.log("true");
        this.setState({ values: values });
      }
    }
    if (i === "=") {
      this.calculate();
      return;
    }
    switch (i) {
      case "times": {
        this.setState({ arithmetic: "times", sum: !this.state.sum });
        break;
      }
      case "add": {
        this.setState({ arithmetic: "add", sum: !this.state.sum });
        break;
      }
      case "subtract": {
        this.setState({ arithmetic: "subtract", sum: !this.state.sum });
        break;
      }
      case "divide": {
        this.setState({ arithmetic: "divide", sum: !this.state.sum });
        break;
      }
      default: {
      }
    }
    if (i === "C") {
      this.clean();
    }
  }
  clean() {
    console.log("clean");
    this.setState({
      value: 0,
      values: 0,
      arithmetic: "",
      enter: false
    });
  }
  calculate() {
    const value1 = this.state.value;
    const value2 = this.state.values;
    const arithmetic = this.state.arithmetic;
    this.setState({ enter: true });
    if (arithmetic === "add") {
      const answer = value1 + value2;
      this.setState({ value: answer, values: 0, sum: true });
    } else if (arithmetic === "subtract") {
      const answer = value1 - value2;
      this.setState({ value: answer, values: 0, sum: true });
    } else if (arithmetic === "times") {
      const answer = value1 * value2;
      this.setState({ value: answer, values: 0, sum: true });
    } else {
      const answer = value1 / value2;
      this.setState({ value: answer, values: 0, sum: true });
    }
  }
  render() {
    return (
      <div className="calculator">
        <Output value={this.state.value} />
        <Numbers val={c => this.handleClick2(c)} />
      </div>
    );
  }
}

export default Calculator;
