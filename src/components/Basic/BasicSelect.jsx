import React, { Component } from "react";
import {
  IoIosArrowUp as ArrowUp,
  IoIosArrowDown as ArrowDown,
} from "react-icons/io";
import {
  Select,
  SelectButton,
  Input,
  Icon,
  SelectOption,
  SelectOptionList,
} from "./BasicSelect.styled";

export default class BasicSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current?.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    const { currency, query, changeCurrency } = this.props;

    return (
      <Select>
        <SelectButton
          onClick={() =>
            this.setState(() => ({
              open: true,
            }))
          }
        >
          <Input selected={currency.symbol} />
          <Icon>{this.state.open === false ? <ArrowDown /> : <ArrowUp />}</Icon>
        </SelectButton>
        {this.state.open && (
          <SelectOption ref={this.wrapperRef}>
            {query.map((item, itemIdx) => (
              <SelectOptionList
                selected={currency.symbol === item.symbol}
                key={itemIdx}
                value={item.text}
                onClick={() => {
                  changeCurrency(item);
                  this.setState({
                    open: false,
                  });
                }}
              >
                <span>{item.symbol + " " + item.label}</span>
              </SelectOptionList>
            ))}
          </SelectOption>
        )}
      </Select>
    );
  }
}
