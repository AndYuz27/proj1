import * as React from 'react';
import { defer } from 'react-router';
import Button from "./components/Button";
import CardA from "./components/CardA"
import axios from 'axios'
import Column from "./components/Column_aaa_a"
import Header from "./components/Header"

export default function App() {
  const data_andy = {
    img_temp: "https://all-aforizmy.ru/wp-content/uploads/2022/07/1920x1200_1411196_www.artfile.ru_.jpg",
    hdr_t: "Какой же этот сказочный лес. Топ заповедников России и СНГ",
    name_account: "hacker_1337",
    img_account: "https://images.thevoicemag.ru/upload/img_cache/5fe/5fe373042af13511ff40c1ad2e727cd8_cropped_1280x1280.jpg",
    desc_t: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis nisi tellus, eu malesuada tortor interdum nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pharetra ante a diam commodo laoreet. Nam imperdiet, urna ac tincidunt scelerisque, lectus felis accumsan nisi, eget suscipit lectus est sit amet enim. "
  }



  return (
    <div className='App'>
      <Header logo="Sample Logo">
        <a href="#">link 1</a>
        <a href="#">link 1</a>
        <a href="#">link 1</a>
        <a href="#">link 1</a>
      </Header>
      
      {/* <Button>Sample text</Button> */}
      <p>Пример карточки</p>
      <CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>
<p>Пример сетки</p>
<Column className="gg" gtc="3" gap_em="0">
<CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>      <CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>
<CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>      <CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>
<CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>      <CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>
<CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>      <CardA className='rrr' img_temp={data_andy.img_temp} hdr={data_andy.hdr_t} img_account={data_andy.img_account} name_account={data_andy.name_account} desc={data_andy.desc_t}/>
</Column>
    </div>
  );
}

