import * as React from 'react';
import Button from "./components/Button";
import CardA from "./components/CardA"


export default function App() {
  return (
    <div className='App'>
      <p>123</p>
      <Button>Sample text</Button>
      <CardA className='rrr' img_temp="https://all-aforizmy.ru/wp-content/uploads/2022/07/1920x1200_1411196_www.artfile.ru_.jpg" hdr="Какой же этот сказочный лес. Топ заповедников России и СНГ" img_account="https://images.thevoicemag.ru/upload/img_cache/5fe/5fe373042af13511ff40c1ad2e727cd8_cropped_1280x1280.jpg" name_account="hacker_228_snus" desc="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis nisi tellus, eu malesuada tortor interdum nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pharetra ante a diam commodo laoreet. Nam imperdiet, urna ac tincidunt scelerisque, lectus felis accumsan nisi, eget suscipit lectus est sit amet enim. "></CardA>
    </div>
  );
}