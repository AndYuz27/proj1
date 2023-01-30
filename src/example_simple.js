import './App.css';
import * as React from 'react';
import { Button, Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import swal from 'sweetalert';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
function App() {
  const ddd = () => {
    alert("Sample Text")
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const dd2 = () => {
    swal({
      title: "Внимание",
      text: "Вы хотите перезагрузить роутер?",
      icon: "warning",
      buttons: ["да ну нафиг", "ДА ХАЧУ"],
    });
  }
  return (
    <div className="App">
      <h2>Обычная кнопка (сделанная через html/css)</h2>
      <button className='cool_btn' onClick={ddd}>Click Me))))</button>
      <br/>
      <h2>Кнопка сделанная через MUI</h2>
      <Button className="ggf" onClick={ddd}>
        <Box
        padding="2px"
        fontSize='24pt'
        width= "256px"
        height="64px"
        boxShadow= "10px 5px 5px  #282c34"
        backgroundColor = "rgb(255, 153, 0)"
        color= "#000"
        fontWeight='600'
        borderRadius="8px"
        textTransform= "capitalize"
        >Click Me))))</Box>   
      </Button>

      <button className='cool_btn' onClick={dd2}>alerta))))</button>

      <div className='lll'>
      <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="ggg">
            <h3>1</h3>
          </div>
          <div className="ggg">
            <h3>2</h3>
          </div>
          <div className="ggg">
            <h3>3</h3>
          </div>
          <div className="ggg">
            <h3>4</h3>
          </div >
          <div className="ggg">
            <h3>5</h3>
          </div>
          <div className="ggg">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
     


      <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>

    </div>
  );
}
export default App;
    