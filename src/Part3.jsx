import React from "react";
import img2 from "./Images/googleplay.webp";
import img3 from "./Images/appstore.webp";
import img4 from "./Images/mobilepic1.webp";
import img5 from "./Images/mobilepic2.webp";

function Part3(){
    return(
        <>
<div className="part3">
<div className="info">
<div className="information">
<h1 className="h1">Restaurants in your pocket</h1>
<p className="p">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
</div>
<div className="appinfo">
    <img className="app" src={img2} alt="Google-Play"/>
    <img className="app1" src={img3} alt="App-Store"/>
</div>
</div>
<div className="mobiles">
   <img className="mobileimg" src={img4} alt="Mobile-Img"/>
   <img className="mobileimg1" src={img5} alt="Mobile-Img"/>
</div>
</div>
        </>
    );
}

export default Part3;