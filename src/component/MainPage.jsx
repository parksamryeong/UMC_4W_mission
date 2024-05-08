import styled from 'styled-components';

const MainContainer = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: 50px;
    color: white;
`;

const SearchContainer = styled.div`
    text-align: center;
    padding: 30px;
`;

const SearchInput = styled.input`
    width: 600px;
    height: 40px;
    border-radius: 50px;
`;

const SearchButton = styled.button`
    width: 80px;
    height: 50px;
    border-radius: 50px;
`;

export default function Main() {
    return (
        <MainContainer>
            <h2 style={{ backgroundColor: 'black', color: 'white', padding: '120px', margin: 0, fontWeight: 'bold' }}>환영합니다!</h2>
            <Title>Find your movie!</Title>
            <SearchContainer>
                <SearchInput type="text" />
                <SearchButton>🔍</SearchButton>
            </SearchContainer>
        </MainContainer>
    );
}