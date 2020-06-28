import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 20px; */
`;

const H1 = styled.h1`
  text-align: center;
`;

const SearchInput = styled.input`
  width: 70%;
  align-content: center;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.font};
  outline: none;
  padding: 5px 10px;
  font-family: ${(props) => props.theme.font.fontFamily};
  margin-bottom: 20px;
  height: 20px;
  align-self: center;
`;

const SearchButton = styled.button`
  width: 45%;
  background-color: ${(props) => props.theme.colors.ctaButton};
  font-family: ${(props) => props.theme.font.fontFamily};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.font};
  outline: none;
  height: 30px;
  align-self: center;
  :hover {
    color: ${(props) => props.theme.colors.background};
    border: none;
  }
  :active {
    background-color: ${(props) => props.theme.colors.font};
    color: ${(props) => props.theme.colors.ctaButton};
  }
`;
const Results = styled.div`
  margin: 25px;
`;

const ResultsHead = styled.h3`
  margin-bottom: 5px;
`;

const ResultsBody = styled.p`
  margin: 5px 0;
`;

export default function SearchPage() {
  const [jobtitle, setJobtitle] = React.useState("");
  return (
    <Container>
      <H1>Suche nach Synonymen</H1>
      <SearchInput
        type="text"
        name="jobtitle-search"
        value={jobtitle}
        onChange={(event) => setJobtitle(event.target.value)}
      />
      <SearchButton>suchen</SearchButton>
      <Results>
        <h2>Vertriebsleiter</h2>
        <div>
          <ResultsHead>englisch</ResultsHead>
          <ResultsBody>Sales Manager</ResultsBody>
        </div>
        <div>
          <ResultsHead>synonme</ResultsHead>
          <ResultsBody>Verkaufsleiter</ResultsBody>
          <ResultsBody>Key Account Manager</ResultsBody>
          <ResultsBody>Account Manager</ResultsBody>
        </div>
      </Results>
    </Container>
  );
}
