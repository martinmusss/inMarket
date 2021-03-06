import styled, {keyframes} from "styled-components";
import photo1 from '../img/all.jpg';
import photo2 from '../img/avocado.jpg';
import photo3 from '../img/bread.jpg';
import photo4 from '../img/apricot.jpg';
import photo5 from '../img/malina.jpg';
import photo6 from '../img/vishnya.jpg';
import photo7 from '../img/berries2.jpg';
import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7]

function Background() {

 
  const [curPhotoIndex, setCurPhotoIndex] = useState(0);


 

  const animationHandler = (e) => {
    setCurPhotoIndex(curPhotoIndex === photos.length - 1 ? 0 : curPhotoIndex + 1)
  }

  return (
    <>
  <Container>
    <Back1 background={photos[curPhotoIndex]} onAnimationIteration={animationHandler}></Back1>
  </Container>
  </>
  )
}


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #222222;
  z-index: -2;
`

const AnimBack = keyframes`
  from {
    height: 100vh;
    width: 100vw;
    left: 0vh;
    top: 0vh;
    opacity: 0;
  }

  30% {
    height: 106vh;
    width: 106vw;
    left: -3vh;
    top: -3vh;
    opacity: 0.4;
  }  

  70% {
    height: 114vh;
    width: 114vw;
    left: -7vh;
    top: -7vh;
    opacity: 0.4;
  }  


  to {
    height: 120vh;
    width: 120vw;
    left: -10vh;
    top: -10vh;
    opacity: 0;
  }
`
const Back1 = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  left: 0px;
  top: 0px;
  animation:${AnimBack} 6s linear infinite;
  -webkit-filter: grayscale(0.3);
  filter: grayscale(0.3);
`

const FormStyle = styled.form`
  position: relative;
    div{
      width: 100%;
      position: relative;
    }
  input{
    border: none;
    background: linear-gradient(35deg, #5f5f5f,#525252);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1rem;
  }
`;
export default Background
