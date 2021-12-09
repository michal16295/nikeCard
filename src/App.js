import { useEffect, useState } from "react";
import styled from "styled-components";
import assets from "./images";
import colors from "./colors";
import { BsFillShareFill } from "react-icons/bs";

const sizes = [7, 8, 9, 10, 11];

const App = () => {
  const [state, setState] = useState(colors.RED);
  const [selectedSize, setSelectedSize] = useState(7);

  return (
    <Container>
      <ShoeContainer color={state}>
        <ShoeInner color={state}>
          <ShoeHeader>
            <Logo>
              <img src={assets.logo} />
            </Logo>
            <Share>
              <BsFillShareFill color={state.color} size={20} />
            </Share>
          </ShoeHeader>
          <h1>nike</h1>
        </ShoeInner>
        <ImageShoe>
          <img src={assets[state.title]} />
        </ImageShoe>
      </ShoeContainer>
      <Info>
        <Heading>
          <Title>
            <h1>Nike Zoom KD 12</h1>
            <New color={state.color}>new</New>
          </Title>
          <h3>Men's Running Shoes</h3>
        </Heading>
        <ProductInfo>
          <h3>product info</h3>
          <p>
            Ensure a comfortable running session by wearing this pair of cool
            running shoes from Nike.
          </p>
        </ProductInfo>
        <Colors>
          <h3>color</h3>
          <ColorFlex>
            {Object.keys(colors).map((key) => (
              <ColorItem
                onClick={() => setState(colors[key])}
                color={colors[key].color}
                selected={state.color === colors[key].color}
              />
            ))}
          </ColorFlex>
        </Colors>
        <Sizes>
          <h3>sizes</h3>
          <SizeFlex>
            {sizes.map((item) => (
              <SizeItem
                onClick={() => setSelectedSize(item)}
                selected={item === selectedSize}
                color={state.color}
              >
                {item}
              </SizeItem>
            ))}
          </SizeFlex>
        </Sizes>
        <Footer>
          <Button color={state.color}>add to cart</Button>
          <h2>$149.99</h2>
        </Footer>
      </Info>
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  margin: auto;
`;

const ShoeContainer = styled.div`
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  min-height: 450px;
  max-width: 400px;
  z-index: 0;
  h1 {
    color: white;
    opacity: 0.1;
    text-transform: uppercase;
    font-size: clamp(6rem, 35vw, 11rem);
    text-align: center;
  }
`;

const ShoeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageShoe = styled.div`
  position: absolute;
  width: 140%;
  top: 20%;
  right: 0;
  transform: rotate(-20deg);
  transition: 0.5s;

  @media (max-width: 1000px) {
    width: 100%;
    transform: rotate(-5deg) translateY(-50%);
    top: 55%;
    right: 2%;
  }
`;

const ShoeInner = styled.div`
  padding: 20px;
  background-image: ${({ color }) => color.gradient};
  animation: 1.5s width ease;
  min-height: 450px;
  @keyframes width {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

const Share = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 36px;
`;

const Info = styled.div`
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 30px;
  max-width: 450px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const New = styled.div`
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  background-color: ${({ color }) => color};
  padding: 10px;
  font-size: clamp(1rem, 1vw, 2rem);
`;

const Heading = styled.div`
  border-bottom: 1px solid #dadada;
  padding: 10px 0;

  h1 {
    font-size: clamp(1.3rem, 2.5vw, 2.2rem);
  }

  h3 {
    font-size: clamp(1rem, 2.1vw, 1.2rem);
    font-weight: 500;
  }
`;

const ProductInfo = styled.div`
  border-bottom: 1px solid #dadada;
  padding: 10px 0;

  h3 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: clamp(1rem, 1.2rem, 1.2rem);
  }

  p {
    color: #555;
    font-size: clamp(1rem, 1.6vw, 1.12rem);
  }
`;

const Colors = styled.div`
  border-bottom: 1px solid #dadada;
  padding: 10px 0;

  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(1rem, 1.2rem, 1.2rem);

  h3 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: clamp(1rem, 1.2rem, 1.2rem);
  }
`;

const ColorFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ColorItem = styled.div`
  background-color: ${({ color }) => color};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  transition: 0.5s;
  margin: 0 10px;
  cursor: pointer;
  border: ${({ selected }) => selected && "5px solid white"};
  box-shadow: ${({ selected }) => selected && "0 0 10px 0.5px rgba(0,0,0,0.2)"};
  transform: ${({ selected }) => selected && "scale(1.1)"};
`;

const Sizes = styled.div`
  border-bottom: 1px solid #dadada;
  padding: 10px 0;

  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(1rem, 1.2rem, 1.2rem);

  h3 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: clamp(1rem, 1.2rem, 1.2rem);
  }
`;

const SizeFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const SizeItem = styled.div`
  background-color: ${({ selected, color }) => (selected ? color : "#eee")};
  height: 40px;
  width: 40px;
  border-radius: 6px;
  margin: 0 10px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "white" : "#444")};
  transition: 0.3s;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 20px;

  h2 {
    font-size: clamp(1rem, 2.1vw, 2.1rem);
    font-weight: 600;
    line-height: 1;
  }
`;

const Button = styled.div`
  background-color: ${({ color }) => color};
  color: white;
  font-size: 1.1.rem;
  font-weight: 500;
  padding: 0.7rem 1rem;
  text-transform: uppercase;
  transition: 0.5s;
  cursor: pointer;
`;
