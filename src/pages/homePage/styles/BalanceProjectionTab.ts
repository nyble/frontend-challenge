import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const InputField = styled.input`
  height: 40px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-stretch: condensed;
  letter-spacing: 0px;
  text-size-adjust: 100%;
  font-weight: 600;
  margin: 2px;
  border-radius: 10px;
  border: 0px solid rgb(240, 243, 252);
  padding: 8px 12px;
  color: rgb(8, 14, 39);
  background-color: rgb(240, 243, 252);
  width: 100%;
  ::placeholder {
    color: #467da3;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  display: block;
`;
