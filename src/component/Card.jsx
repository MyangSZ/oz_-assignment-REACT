import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// styled component
const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
`;
// 포켓몬 카드정보
export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front} />
      <div>{pokemon.name}</div>
    </CardContainer>
  );
};
