import styled from "styled-components";

export const Select = styled.div`
  position: relative;
  margin-top: 2.5px;
  cursor: pointer;
`;

export const SelectButton = styled.span`
  position: relative;
  background: none;
  border: none;
  display: flex;
  align-items: center;
`;

export const Input = styled.input.attrs(({ selected }) => ({
  type: "text",
  value: selected || "",
  readOnly: true,
}))`
  background: inherit;
  width: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-align: right;
`;

export const SelectOption = styled.ul`
  list-style-type: none;
  position: absolute;
  background: #ffffff;
  left: -20px;
  z-index: 10;
  overflow: auto;
  padding-left: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 2.5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const SelectOptionList = styled.li`
  position: relative;
  width: 114px;
  padding: 8px 0px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #eeeeee;
  }
`;

export const Icon = styled.span.attrs(() => ({
  ariaHidden: true,
}))`
  display: flex;
  align-items: center;
`;
