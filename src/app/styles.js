import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #385faa;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  input,
  button {
    min-width: 500px;
    padding: 15px 10px;
    border-radius: 5px;
    outline: none;
    text-align: center;
    font-size: 16px;
  }

  input {
    color: #2d70b7;
    font-weight: 500;
    border: 3px solid #2d70b7;

    ::placeholder {
      color: #5d5d5d87;
    }
  }

  button {
    background: #ffcb05;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;

    :disabled {
      color: #21386e4e;
    }
  }
`;

export const Logo = styled.img``;
