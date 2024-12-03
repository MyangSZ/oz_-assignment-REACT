import { useState } from "react";
import styled from "styled-components";

// 3d이미지 효과
const FilitInageContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotate(0deg)")};
`;

// 카드 앞면
const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`;

// 카드 뒷면
const BackImage = styled.img`
  backface-visibility: hidden;
  width: 100%;
  heignt: 100%;
  transform: rotateY(180deg);
`;

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      <FilitInageContainer flipped={flipped}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FilitInageContainer>

      <button onClick={() => setFlipped((prev) => !prev)}>카드 뒤집기</button>
    </>
  );
}
