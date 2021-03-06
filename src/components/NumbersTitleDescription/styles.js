import styled from "styled-components";

// Styles for section title
export const StyledTitle = styled.h2`
  &&& {
    margin-bottom: 4px;
    font-family: "Karla Bold";
    font-style: normal;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    color: #000000;
    @media only screen and (max-width: 425px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

// Styles for section description
export const StyledDescription = styled.h4`
  &&& {
    margin: 0;
    width: 600px;
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
      width: 70%;
    }
  }
`;

// Styles for section description
export const DescriptionWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 0 32px 0;
  }
`;

// Styles for section description
export const StyledLink = styled.p`
  &&& {
    font-family:  'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    opacity: 0.6;
    text-align: right;
    margin: 0;
    :hover {
      opacity: 1;
    }
    @media only screen and (max-width: 425px) {
      font-size: 12px;
      line-height: 15px;
      width: 100%;
      margin-bottom: 4px;
    }
  }
`;

// Styles for section description
export const StyledUpdate = styled.p`
  &&& {
    font-family:  'Source Sans Pro Italic';
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #333333;
    padding-right: 2px;
    opacity: 0.6;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 12px;
      line-height: 15px;
      width: 100%;
    }
  }
`;


