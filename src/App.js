import * as React from 'react';
import { defer } from 'react-router';
import Button from "./components/Button";
import CardA from "./components/CardA"
import axios from 'axios'
import Column from "./components/Column_aaa"

export default function App() {
  return (
    <div className='App'>
      
      {/* <Button>Sample text</Button> */}
      <p>Пример карточки</p>
      <CardA className='rrr' img_temp="https://all-aforizmy.ru/wp-content/uploads/2022/07/1920x1200_1411196_www.artfile.ru_.jpg" hdr="Какой же этот сказочный лес. Топ заповедников России и СНГ" img_account="https://images.thevoicemag.ru/upload/img_cache/5fe/5fe373042af13511ff40c1ad2e727cd8_cropped_1280x1280.jpg" name_account="hacker_1337" desc="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis nisi tellus, eu malesuada tortor interdum nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pharetra ante a diam commodo laoreet. Nam imperdiet, urna ac tincidunt scelerisque, lectus felis accumsan nisi, eget suscipit lectus est sit amet enim. "></CardA>
<p>Пример сетки</p>
<Column className="gg" spacing="55" breakpoints="55" offsets="12">
  <p>aaa</p>
  <p>123</p>
</Column>
    </div>
  );
}

