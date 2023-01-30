import React from "react";
import "./style.css"
const CardA = ({img_temp, hdr, img_account, name_account, desc, onClick, className, id}) =>{
    return <div className={`aaa_card_a ${className}`}>
        <div className="aaa_card_a_img_blank" style={{backgroundImage: `url(${img_temp !== undefined ? img_temp : "https://ih0.redbubble.net/image.343726250.4611/flat,800x800,075,f.jpg"})`}}></div>
        <div className="aaa_card_a_info">
        <h3>{hdr}</h3>
        <div className="aaa_card_a_info_userdata">
        <div className="aaa_card_a_info_userdata_photo" style={{backgroundImage: `url(${img_account !== undefined ? img_account : "https://ih0.redbubble.net/image.343726250.4611/flat,800x800,075,f.jpg"})`}}></div>
        <span className="account_txt_aaa" style={{padding: "5px"}}>@{name_account}</span>
        
        </div>
        <p>{desc}</p>
        <div className="aaa_card_a_info_btn">
            <button>Sample Text</button>
        </div>
        </div>
    </div>
}
export default CardA