import { useState } from "react";
import { Row,Col ,Image,Carousel,Button} from "react-bootstrap"
import { Circlesvg } from "./Circlesvg"
import {BsArrowRight} from "react-icons/bs"
import $ from "jquery";


export const Home=()=>{
    // $(function(){

    //     /*
    //     Add this code to every page.
    
    //     We start by hiding the body, and then fading it in.
    //     */
    //     $('body').hide().fadeIn('fast');
    
    //     /*
    //     Now we deal with all 'a' tags...
    //     */
    //     $('a').click(function(){
    //         /*
    //         Get the url from this anchors href
    //         */
    //         var link = $(this).attr('href');
    //         /*
    //         Fade out the whole page
    //         */
    //         $('body').fadeOut('fast', function(){
    //             /*
    //             When that's done (on the 'callback') send the browser to the link.
    //             */
    //             console.log(link)
    //             window.location.href = link;
    //         });
    //     });
    
    // });
        const [index, setIndex] = useState(0);
      

        // $(document).ready(function(){
        //      // this alert does actually show up when the page is loaded
        //     // Activate Carousel
        
        //     // Go to the second item
        //     $(".b1").click(function(){
        //         $("#myCarousel").carousel(1); 
        //         alert("go to second Item"); // this should show up when I click the button but it does not show up
        //     });
        
        //     // Go to the third item
        //     $("#b2").click(function(){
        //         $("#myCarousel").carousel(2);
        //         alert("go to third Item"); // neither does this
        
        //     });
        
        // });
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
          };
        
    return(
        
        <div style={{overflow:"hidden"}}>
            <Carousel id="myCarousel slide" activeIndex={index} onSelect={handleSelect} style={{zIndex:"2"}} interval={null} className="d-none d-lg-block">
            <Carousel.Item>
      <Row id="1">
<Col lg={5} style={{backgroundColor:"#12183a",minHeight:"100vh"}}>
    
</Col>
<Col lg={7} style={{backgroundColor:"#182049",minHeight:"100vh",maxHeight:"100vh",overflow:"hidden"}}>
<Row style={{position:"relative"}}>
    <Col lg={11} style={{marginLeft:"4vw",marginTop:"",float:"left",overflow:"hidden"}}>
    <img style={{position:"relative",marginTop:"10vw",marginLeft:"4vw",maxHeight:"75vh",width:"40%"}} src="nasa-fitness-tracking-mobile-app.png"></img>
    <img style={{marginTop:"-50vh",marginLeft:"2vw",maxHeight:"75vh",width:"40%"}} src="measure-total-body-weight-through-fitness-app.png" ></img>
    </Col>
    {/* <Col lg={6} style={{marginLeft:"0px",paddingLeft:"0px", marginTop:"15vh"}}>
    
    </Col> */}
</Row>
</Col>
</Row>
<Row className="rowoverlay2">
<Col lg={7} style={{minHeight:"100vh"}}>  
<Row>
<Col lg={5} style={{minHeight:"100vh"}}>
</Col>
<Col lg={7} style={{minHeight:"100vh",paddingLeft:"1.1vw"}}>
<div className="circle2" style={{backgroundColor:"#12183a"}}><Circlesvg ></Circlesvg></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
<Row className="rowoverlayi2">
<Col lg={6} style={{minHeight:"100vh"}}>  
<Row>
{/* <Col lg={2} style={{minHeight:"100vh"}}>
</Col> */}
<Col lg={12} style={{minHeight:"100vh"}}>
<div style={{float:"right"}}  className="t2itle0"><p style={{fontSize:"25px",marginRight:"15vw"}}>Powered by advance</p></div>
<div style={{float:"right"} }className="t2itle"><img style={{marginRight:"-20vw"}} src="nasa-mobile-app.png"></img></div>
<div style={{float:"right",marginTop:"40vh"}}  className="t2itle2"><p style={{fontSize:"25px",marginRight:"-35vw",marginLeft:"8vw"}}>algorithms</p></div>
<div className="im2"></div>
<div className="t2itle3"><h1 style={{fontSize:"60px"}}>ABC 345</h1></div>
<div className="t2itle4" style={{width:"12vw"}}><p className="rss opacity" style={{fontSize:"20px"}}>We are the best web development company in the world</p></div>
<div className="t2itle5"><p className="rss opacity" style={{fontSize:"20px"}}>Coming Soon<p className="skip2"><a style={{color:"white"}} href="#1">SKIP</a></p></p></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
      </Carousel.Item>
      <Carousel.Item >
      <Row id="2">
            <Col lg={5} style={{backgroundColor:"#6C56A8",minHeight:"100vh"}}>
                
            </Col>
            <Col lg={7} style={{backgroundColor:"#BAB9BD",minHeight:"100vh"}}>
            <Row>
                <Col lg={11} style={{marginLeft:"4vw",marginTop:"15vh",float:"left"}}>
                <img width="50%" src="nexgtv-entertainment-mobile-app-development.png"></img>
                <img width="50%" src="nexgtv-mobile-app-ui-design.png" ></img>
                
                </Col>
                {/* <Col lg={6} style={{marginLeft:"0px",paddingLeft:"0px", marginTop:"15vh"}}>
                
                </Col> */}
            </Row>
            </Col>
        </Row>
        <Row className="rowoverlay">
         <Col lg={7} style={{minHeight:"100vh"}}>  
         <Row>
        <Col lg={5} style={{minHeight:"100vh"}}>
        </Col>
        <Col lg={7} style={{minHeight:"100vh",paddingLeft:"1.1vw"}}>
        <div className="circle"><Circlesvg></Circlesvg></div>
        </Col>
        </Row>
        </Col> 
        
        <Col lg={5} style={{minHeight:"100vh",}}>
            
            
        </Col>
        </Row>
        <Row className="rowoverlayi">
         <Col lg={6} style={{minHeight:"100vh"}}>  
         <Row>
        {/* <Col lg={2} style={{minHeight:"100vh"}}>
        </Col> */}
        <Col lg={10} style={{minHeight:"100vh"}}>
        
        <div style={{float:"right"} }className="title"><h1 style={{fontSize:"60px"}}>25M+ Downloads</h1></div>
        {/* <div style={{float:"right"}}><Button  className="b1" onClick={handleB1} style={{zIndex:"100"}}>B1</Button></div> */}
        <div style={{float:"right"}}  className="title2"><p style={{fontSize:"30px"}}>on app store & google playstore</p></div>
        <div className="im"><img className="rss opacity" style={{backgroundColor:"#6C56A8"}} src="world-communication-awards-for-best-digital-experience.png"></img></div>
        <div className="title3"><h1 style={{fontSize:"60px"}}>ABC 123</h1></div>
        <div className="title4"><p className="rss opacity" style={{fontSize:"20px"}}>We are the best web development company in the world</p></div>
        <div className="title5"><p className="rss opacity" style={{fontSize:"20px"}}>View Case Study<BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight><p className="skip"><a style={{color:"white"}} href="#2">SKIP</a></p></p></div>
        </Col>
        </Row>
        </Col> 
        
        <Col lg={5} style={{minHeight:"100vh",}}>
            
            
        </Col>
        </Row>

      </Carousel.Item>
      <Carousel.Item>
      <Row id="3">
<Col lg={5} style={{backgroundColor:"#5c66cd",minHeight:"100vh"}}>
    
</Col>
<Col lg={7} style={{backgroundColor:"#262d63",minHeight:"100vh",maxHeight:"100vh",overflow:"hidden"}}>
<Row style={{position:"relative"}}>
    <Col lg={11} style={{marginLeft:"4vw",marginTop:"",float:"left",overflow:"hidden"}}>
    <img style={{position:"relative",marginTop:"35vh",marginLeft:"4vw",width:"40%"}} src="veme-blockchain-app-developed.png"></img>
    <img style={{marginTop:"-55vh",marginLeft:"2vw",width:"40%"}} src="veme-app-ui-design.png" ></img>
    </Col>
    {/* <Col lg={6} style={{marginLeft:"0px",paddingLeft:"0px", marginTop:"15vh"}}>
    
    </Col> */}
</Row>
</Col>
</Row>
<Row className="rowoverlay2">
<Col lg={7} style={{minHeight:"100vh"}}>  
<Row>
<Col lg={5} style={{minHeight:"100vh"}}>
</Col>
<Col lg={7} style={{minHeight:"100vh",paddingLeft:"1.1vw"}}>
<div className="circle2"><Circlesvg></Circlesvg></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
<Row className="rowoverlayi2">
<Col lg={6} style={{minHeight:"100vh"}}>  
<Row>
{/* <Col lg={2} style={{minHeight:"100vh"}}>
</Col> */}
<Col lg={12} style={{minHeight:"100vh"}}>
<div style={{float:"right"}}  className="t2itle0"><p style={{fontSize:"30px",marginRight:"15vw"}}>The Next Big</p></div>
<div style={{float:"right"} }className="t2itle"><h1 style={{fontSize:"60px",marginRight:"-20vw"}}>Blockchain</h1></div>
<div style={{float:"right"}}  className="t2itle2"><p style={{fontSize:"30px",marginRight:"-35vw",marginLeft:"8vw"}}>Revolution</p></div>
<div className="im2"></div>
<div className="t2itle3"><h1 style={{fontSize:"60px"}}>ABC 234</h1></div>
<div className="t2itle4"><p className="rss opacity" style={{fontSize:"20px"}}>We are the best web development company in the world</p></div>
<div className="t2itle5"><p className="rss opacity" style={{fontSize:"20px"}}>Coming Soon<p className="skip2"><a style={{color:"white"}} href="#1">SKIP</a></p></p></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
      </Carousel.Item>

<Carousel.Item>
      <Row id="4">
<Col lg={5} style={{backgroundColor:"#15243B",minHeight:"100vh"}}>
    
</Col>
<Col lg={7} style={{backgroundColor:"#0E131C",minHeight:"100vh",maxHeight:"100vh",overflow:"hidden"}}>
<Row style={{position:"relative"}}>
    <Col lg={12} style={{marginLeft:"4vw",marginTop:"",float:"left",overflow:"hidden"}}>
    <img style={{marginTop:"-90vh",marginLeft:"0vw",width:"40%"}} src="pizza_box.png" ></img>
    <img style={{marginTop:"40vh",marginLeft:"-21vw",width:"40%"}} src="domi-img1.png"></img>
    <img style={{marginTop:"8vh",marginLeft:"2vw",width:"25%"}} src="ux-strategy-for-mobile-app-devlopment.png"></img>
    <img style={{marginTop:"-90vh",marginLeft:"0vw",width:"20%"}} src="dominos-bread.png"></img>
    <img style={{marginTop:"-40vh",marginLeft:"33vw",width:"37%"}} src="dominos-bread1.png"></img>

    {/* <img style={{marginTop:"-55vh",marginLeft:"2vw"}} src="veme-app-ui-design.png" ></img> */}
    </Col>
    {/* <Col lg={6} style={{marginLeft:"0px",paddingLeft:"0px", marginTop:"15vh"}}>
    
    </Col> */}
</Row>
</Col>
</Row>
<Row className="rowoverlay2">
<Col lg={7} style={{minHeight:"100vh"}}>  
<Row>
<Col lg={5} style={{minHeight:"100vh"}}>
</Col>
<Col lg={7} style={{minHeight:"100vh",paddingLeft:"1.1vw"}}>
<div className="circle3"><Circlesvg></Circlesvg></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
<Row className="rowoverlayi2">
<Col lg={6} style={{minHeight:"100vh"}}>  
<Row>
{/* <Col lg={2} style={{minHeight:"100vh"}}>
</Col> */}
<Col lg={12} style={{minHeight:"100vh"}}>
<div style={{float:"right"}}  className="t2itle0"><p style={{fontSize:"30px",marginRight:"15vw"}}>Redefining</p></div>
<div style={{float:"right"} }className="t2itle"><h1 style={{fontSize:"60px",marginRight:"-20vw"}}>UX Strategy</h1></div>
<div style={{float:"right"}}  className="t2itle2"><p style={{fontSize:"30px",marginRight:"-35vw",marginLeft:"8vw"}}>and UI design</p></div>
<div className="im2"></div>
<div className="t2itle3"><h1 style={{fontSize:"60px"}}>ABC 456</h1></div>
<div className="t2itle4"><p className="rss opacity" style={{fontSize:"20px"}}>We are the best web development company in the world</p></div>
<div className="t2itle5"><p className="rss opacity" style={{fontSize:"20px"}}>View Case Study<BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight><p className="skip2"><a style={{color:"white"}} href="#1">SKIP</a></p></p></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row id="5">
<Col lg={5} style={{backgroundColor:"#134DA2",minHeight:"100vh"}}>
    
</Col>
<Col lg={7} style={{backgroundColor:"#52CDDE",minHeight:"100vh",maxHeight:"100vh",overflow:"hidden"}}>
<Row style={{position:"relative"}}>
    <Col lg={12} style={{marginLeft:"4vw",marginTop:"",float:"left",overflow:"hidden"}}>
    <img style={{marginTop:"-90vh",marginLeft:"2vw",width:"30%"}} src="karavan-social-networking-app-screen.png"></img>
    <img style={{marginTop:"50vh",marginLeft:"-17vw",width:"30%"}} src="karavan_2.png"></img>
    <img style={{marginTop:"-65vh",marginLeft:"2vw",width:"25%"}} src="social-networking-app-case-study.png"></img>
    <img style={{marginTop:"60vh",marginLeft:"-14vw",width:"25%"}} src="karavan-social-networking-app-screen-2.png"></img>
    <img style={{marginTop:"-120vh",marginLeft:"37vw",width:"25%"}} src="developers-for-social-media-app.png"></img>

    {/* <img style={{marginTop:"-55vh",marginLeft:"2vw"}} src="veme-app-ui-design.png" ></img> */}
    </Col>
    {/* <Col lg={6} style={{marginLeft:"0px",paddingLeft:"0px", marginTop:"15vh"}}>
    
    </Col> */}
</Row>
</Col>
</Row>
<Row className="rowoverlay2">
<Col lg={7} style={{minHeight:"100vh"}}>  
<Row>
<Col lg={5} style={{minHeight:"100vh"}}>
</Col>
<Col lg={7} style={{minHeight:"100vh",paddingLeft:"1.1vw"}}>
<div className="circle4"><Circlesvg></Circlesvg></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
<Row className="rowoverlayi2">
<Col lg={6} style={{minHeight:"100vh"}}>  
<Row>
{/* <Col lg={2} style={{minHeight:"100vh"}}>
</Col> */}
<Col lg={12} style={{minHeight:"100vh"}}>
<div style={{float:"right"}}  className="t2itle0"><p style={{fontSize:"30px",marginRight:"15vw"}}>Text Headline</p></div>
<div style={{float:"right"} }className="t2itle"><h1 style={{fontSize:"60px",marginRight:"-20vw"}}>Text Headline</h1></div>
<div style={{float:"right"}}  className="t2itle2"><p style={{fontSize:"30px",marginRight:"-35vw",marginLeft:"8vw"}}>Footer Headline</p></div>
<div className="im2"></div>
<div className="t2itle3"><h1 style={{fontSize:"60px"}}>ABC 567</h1></div>
<div className="t2itle4"><p className="rss opacity" style={{fontSize:"20px"}}>We are the best AR Development company in the world</p></div>
<div className="t2itle5"><p className="rss opacity" style={{fontSize:"20px"}}>View Case Study<BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight><p className="skip2"><a style={{color:"white"}} href="#1">SKIP</a></p></p></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row id="6">
<Col lg={5} style={{backgroundColor:"#194592",minHeight:"100vh"}}>
    
</Col>
<Col lg={7} style={{backgroundColor:"#F07F13",minHeight:"100vh",maxHeight:"100vh",overflow:"hidden"}}>
<Row style={{position:"relative"}}>
    <Col lg={12} style={{marginLeft:"0vw",marginTop:"",float:"left",overflow:"hidden"}}>
    <img style={{marginTop:"10vh",marginLeft:"-1vw",width:"110%"}} src="erp-app-development-service.png"></img>
    {/* <img style={{marginTop:"-55vh",marginLeft:"2vw"}} src="veme-app-ui-design.png" ></img> */}
    </Col>
    {/* <Col lg={6} style={{marginLeft:"0px",paddingLeft:"0px", marginTop:"15vh"}}>
    
    </Col> */}
</Row>
</Col>
</Row>
<Row className="rowoverlay2">
<Col lg={7} style={{minHeight:"100vh"}}>  
<Row>
<Col lg={5} style={{minHeight:"100vh"}}>
</Col>
<Col lg={7} style={{minHeight:"100vh",paddingLeft:"1.1vw"}}>
<div className="circle5"><Circlesvg></Circlesvg></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
<Row className="rowoverlayi2">
<Col lg={6} style={{minHeight:"100vh"}}>  
<Row>
{/* <Col lg={2} style={{minHeight:"100vh"}}>
</Col> */}
<Col lg={12} style={{minHeight:"100vh"}}>
<div style={{float:"right"}}  className="t2itle0"><p style={{fontSize:"30px",marginRight:"8vw"}}>Developing ERP Solution for</p></div>
<div style={{float:"right"} }className="t2itle"><h1 style={{fontSize:"60px",marginRight:"-21vw"}}>Text Headline</h1></div>
<div style={{float:"right"}}  className="t2itle2"><p style={{fontSize:"30px",marginRight:"-20vw",marginLeft:"8vw"}}>in furniture industry</p></div>
<div className="im2"></div>
<div className="t2itle3"><h1 style={{fontSize:"60px"}}>ABC 678</h1></div>
<div className="t2itle4"><p className="rss opacity" style={{fontSize:"20px"}}>Best since 2017.</p> <p className="rss opacity" style={{fontSize:"20px"}}>We offer best range of web development and app development.</p></div>
<div className="t2itle5"><p className="rss opacity" style={{fontSize:"20px"}}>View Case Study<BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight><p className="skip2"><a style={{color:"white"}} href="#1">SKIP</a></p></p></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
      </Carousel.Item>
      <Carousel.Item>
<Row id="7">
<Col lg={5} style={{backgroundColor:"#42844D",minHeight:"100vh"}}>
    
</Col>
<Col lg={7} style={{backgroundColor:"#5FB96A",minHeight:"100vh",maxHeight:"100vh",overflow:"hidden"}}>
<Row style={{position:"relative"}}>
    <Col lg={12} style={{marginLeft:"0vw",marginTop:"",float:"left",overflow:"hidden"}}>
    <img style={{marginTop:"40vh",marginLeft:"15vw",width:"40%"}} src="melltoo-img2.png"></img>
    <img style={{marginTop:"-85vh",marginLeft:"32vw",width:"35%"}} src="melltoo-img1.png"></img>
    {/* <img style={{marginTop:"-55vh",marginLeft:"2vw"}} src="veme-app-ui-design.png" ></img> */}
    </Col>
    {/* <Col lg={6} style={{marginLeft:"0px",paddingLeft:"0px", marginTop:"15vh"}}>
    
    </Col> */}
</Row>
</Col>
</Row>
<Row className="rowoverlay2">
<Col lg={7} style={{minHeight:"100vh"}}>  
<Row>
<Col lg={5} style={{minHeight:"100vh"}}>
</Col>
<Col lg={7} style={{minHeight:"100vh",paddingLeft:"1.1vw"}}>
<div className="circle6"><Circlesvg></Circlesvg></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
<Row className="rowoverlayi2">
<Col lg={6} style={{minHeight:"100vh"}}>  
<Row>
{/* <Col lg={2} style={{minHeight:"100vh"}}>
</Col> */}
<Col lg={12} style={{minHeight:"100vh"}}>
<div style={{float:"right"}}  className="t2itle0"><p style={{fontSize:"30px",marginRight:"12vw"}}>Best Classifields</p></div>
<div style={{float:"right"} }className="t2itle"><h1 style={{fontSize:"60px",marginRight:"-21vw"}}>East Asia</h1></div>
<div style={{float:"right"}}  className="t2itle2"><p style={{fontSize:"30px",marginRight:"-13vw",marginLeft:"8vw"}}>Countries</p></div>
<div className="im"><img src="mobile-app-of-the-year-by-entrepreneur.png"></img></div>
<div className="t2itle3"><h1 style={{fontSize:"60px"}}>ABC 678</h1></div>
<div className="t2itle4"><p className="rss opacity" style={{fontSize:"20px"}}>Best since 2017.</p> <p className="rss opacity" style={{fontSize:"20px"}}>We offer best range of web development and app development.</p></div>
<div className="t2itle5"><p className="rss opacity" style={{fontSize:"20px"}}>View Case Study<BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight><p className="skip2"><a style={{color:"white"}} href="#1">SKIP</a></p></p></div>
</Col>
</Row>
</Col> 

<Col lg={5} style={{minHeight:"100vh",}}>


</Col>
</Row>
      </Carousel.Item>
 


      {/* <Carousel.Item>

      </Carousel.Item>

      <Carousel.Item>
      </Carousel.Item>
      <Carousel.Item>
      
      </Carousel.Item> */}
    </Carousel>
   
    <Carousel className="d-block d-lg-none"  interval={null}>
    <Carousel.Item>
     <Row style={{width:"100vw",height:"55vh",backgroundColor:"#182049",overflow:"hidden",marginLeft:"0vw"}}>
         <img style={{marginTop:"16vh",marginLeft:"-6vw",maxHeight:"60vh",maxWidth:"67vw"}} src="nasa-fitness-tracking-mobile-app.png"></img>
         <img style={{marginTop:"-11vh",marginLeft:"-8vw",marginRight:"-10vw",maxHeight:"50vh",maxWidth:"53vw",float:"right"}} src="measure-total-body-weight-through-fitness-app.png" ></img>
         
     </Row>
     <Row style={{width:"100vw",height:"45vh",backgroundColor:"#12183a",marginLeft:"0vw"}} >
       <Col>
       <div style={{marginLeft:"4vw"}}><h1 style={{fontSize:"30px",color:"white",marginTop:"10vh"}}>ABC 2</h1></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"15px",color:"white"}}>This is sample text for ABC 2</p></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"17px",color:"white"}}>CASE STUDY -<Button style={{color:"black",backgroundColor:"white",marginLeft:"2px",fontWeight:"500",padding:"10px",border:"none"}} className="rounded-pill"> Coming Soon</Button></p></div>
       
       </Col>
     </Row>
  </Carousel.Item>
  <Carousel.Item>
     <Row style={{width:"100vw",height:"55vh",backgroundColor:"#22295B",overflow:"hidden",marginLeft:"0vw"}}>
         <img style={{marginTop:"16vh",marginLeft:"2vw",maxHeight:"60vh",maxWidth:"55vw"}} src="veme-blockchain-app-developed.png"></img>
         <img style={{marginTop:"-11vh",marginLeft:"-5vw",marginRight:"-10vw",maxHeight:"50vh",maxWidth:"53vw",float:"right"}} src="veme-app-ui-design.png" ></img>
         
     </Row>
     <Row style={{width:"100vw",height:"45vh",background:"rgb(194,103,177)",background: "linear-gradient(131deg, rgba(194,103,177,1) 0%, rgba(102,96,191,1) 100%)",marginLeft:"0vw"}} >
       <Col>
       <div style={{marginLeft:"4vw"}}><h1 style={{fontSize:"30px",color:"white",marginTop:"10vh"}}>ABC 1</h1></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"15px",color:"white"}}>This is sample text for ABC 1</p></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"17px",color:"white"}}>CASE STUDY -<Button style={{color:"white",backgroundColor:"#EC6BA4",marginLeft:"2px",fontWeight:"500",padding:"10px",border:"none"}} className="rounded-pill"> Coming Soon</Button></p></div>
       
       </Col>
     </Row>
  </Carousel.Item>
  <Carousel.Item>
     <Row style={{width:"100vw",height:"55vh",backgroundColor:"#4FD0EB",overflow:"hidden",marginLeft:"0vw"}}>
         <Col xs={5}>
         <img style={{marginTop:"-17vh",marginLeft:"0.25vw",maxHeight:"50vh",width:"120%"}} src="karavan-social-networking-app-screen.png"></img>
         <img style={{marginTop:"1vh",marginLeft:"0.25vw",maxHeight:"60vh",width:"120%"}} src="karavan_2.png"></img>
         

         </Col>
         <Col xs={5}>
         <img style={{marginTop:"0vh",marginLeft:"-2.5vw",maxHeight:"40vh",width:"100%"}} src="social-networking-app-case-study.png"></img>
         <img style={{marginTop:"1vh",marginLeft:"-2.5vw",maxHeight:"60vh",width:"100%"}} src="karavan-social-networking-app-screen-2.png"></img>
         </Col>
         <Col xs={2}>
         <img style={{marginTop:"16vh",marginLeft:"-11vw",maxHeight:"60vh",maxWidth:"45vw"}} src="developers-for-social-media-app.png"></img>
         </Col>
         
     </Row>
     <Row style={{width:"100vw",height:"45vh",backgroundColor:"#2471E9",marginLeft:"0vw"}} >
       <Col>
       <div style={{marginLeft:"4vw"}}><h1 style={{fontSize:"30px",color:"white",marginTop:"10vh"}}>ABC 4</h1></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"15px",color:"white"}}>This is sample text for ABC 4</p></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"17px",color:"white",fontWeight:"600",letterSpacing:"3px"}}>View Case Study <BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight></p></div>
       
       </Col>
     </Row>
  </Carousel.Item>
  <Carousel.Item>
     <Row style={{width:"100vw",height:"55vh",backgroundColor:"#0D121B",overflow:"hidden",marginLeft:"0vw"}}>
         <Col xs={6}>
         <img style={{marginTop:"0vh",marginLeft:"-5vw",maxHeight:"20vh",width:"100%"}} src="pizza_box.png"></img>
         <img style={{marginTop:"10vh",marginLeft:"2vw",maxHeight:"60vh",width:"100%"}} src="domi-img1.png"></img>
         

         </Col>
         <Col xs={4}>
         <img style={{marginTop:"-0.1vh",marginLeft:"-3vw",maxHeight:"40vh",width:"150%"}} src="ux-strategy-for-mobile-app-devlopment.png"></img>
         <img style={{marginTop:"4vh",marginLeft:"-3vw",maxHeight:"60vh",width:"150%"}} src="on-demand-app-development-company.png"></img>
         </Col>
         <Col xs={2}>
         <img style={{marginTop:"-5vh",marginLeft:"7vw",maxHeight:"40vh",width:"100%"}} src="dominos-bread.png"></img>
         <img style={{marginTop:"15vh",marginLeft:"5vw",maxHeight:"60vh",width:"200%"}} src="dominos-masala.png"></img>
         <img style={{marginTop:"13vh",marginLeft:"-3vw",maxHeight:"60vh",maxWidth:"45vw"}} src="dominos-bread1.png"></img>
         </Col>
         
     </Row>
     <Row style={{width:"100vw",height:"45vh",backgroundColor:"#15243A",marginLeft:"0vw"}} >
       <Col>
       <div style={{marginLeft:"4vw"}}><h1 style={{fontSize:"30px",color:"white",marginTop:"10vh"}}>ABC 3</h1></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"15px",color:"white"}}>This is sample text for ABC 3</p></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"17px",color:"white",fontWeight:"600",letterSpacing:"3px"}}>View Case Study <BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight></p></div>
       
       </Col>
     </Row>
  </Carousel.Item>
  <Carousel.Item>
     <Row style={{width:"100vw",height:"55vh",backgroundColor:"#CCCBCF",overflow:"hidden",marginLeft:"0vw"}}>
         <img style={{marginTop:"16vh",marginLeft:"-6vw",maxHeight:"60vh",maxWidth:"67vw"}} src="nexgtv-entertainment-mobile-app-development.png"></img>
         <img style={{marginTop:"16.5vh",marginLeft:"-20vw",marginRight:"-5vw",maxHeight:"50vh",maxWidth:"64vw",float:"right"}} src="nexgtv-mobile-app-ui-design.png" ></img>
         
     </Row>
     <Row style={{zIndex:"10",width:"100vw"}}>
         <Col style={{marginTop:"-5vh",marginLeft:"5vw"}}>
             <img width="250vw" style={{backgroundColor:"white",border:"2px solid #6751A0",borderRadius:"8px"}} src="world-communication-awards-for-best-digital-experience.png"></img>
         </Col>

     </Row>
     <Row style={{width:"100vw",height:"45vh",marginTop:"-6vh", backgroundColor:"#6751A0",marginLeft:"0vw"}} >
       <Col>
       <div style={{marginLeft:"4vw"}}><h1 style={{fontSize:"30px",color:"white",marginTop:"10vh"}}>ABC 123</h1></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"15px",color:"white"}}>This is sample text for ABC 123. This is sample text for ABC 123.</p></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"17px",color:"white",fontWeight:"600",letterSpacing:"3px"}}>View Case Study <BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight></p></div>
       
       </Col>
     </Row>
  </Carousel.Item>
  <Carousel.Item>
     <Row style={{width:"100vw",height:"55vh",backgroundColor:"#F07F13",overflow:"hidden",marginLeft:"0vw",marginRight:"0vw"}}>
         <img style={{marginTop:"10vh",marginLeft:"-3vw",marginRight:"-10vw",maxHeight:"50vh",width:"300vw"}} src="erp-app-development-service.png" ></img>
     </Row>
     <Row style={{width:"100vw",height:"45vh", backgroundColor:"#1A4491",marginLeft:"0vw"}} >
       <Col>
       <div style={{marginLeft:"4vw"}}><h1 style={{fontSize:"30px",color:"white",marginTop:"10vh"}}>ABC 4</h1></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"15px",color:"white"}}>This is sample text for ABC 4</p></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"17px",color:"white",fontWeight:"600",letterSpacing:"3px"}}>View Case Study <BsArrowRight style={{marginLeft:"10px"}}></BsArrowRight></p></div>
       
       </Col>
     </Row>
  </Carousel.Item>
  <Carousel.Item>
     <Row style={{width:"100vw",height:"55vh",backgroundColor:"#5FB96A",overflow:"hidden",marginLeft:"0vw"}}>
         <img style={{marginTop:"6vh",marginLeft:"-3vw",maxHeight:"60vh",maxWidth:"80vw"}} src="melltoo-img2.png"></img>
         <img style={{marginTop:"16vh",marginLeft:"-27vw",marginRight:"-5vw",maxHeight:"50vh",maxWidth:"53vw",float:"right"}} src="melltoo-img1.png" ></img>
         
     </Row>
     <Row style={{zIndex:"10",width:"100vw"}}>
         <Col style={{marginTop:"-5vh",marginLeft:"5vw"}}>
             <img width="250vw" style={{borderRadius:"8px"}} src="mobile-app-of-the-year-by-entrepreneur.png"></img>
         </Col>

     </Row>
     <Row style={{width:"100vw",height:"45vh",marginTop:"-6vh", backgroundColor:"#3E7D49",marginLeft:"0vw"}} >
       <Col>
       <div style={{marginLeft:"4vw"}}><h1 style={{fontSize:"30px",color:"white",marginTop:"10vh"}}>XYZ 123</h1></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"15px",color:"white"}}>This is sample text for XYZ 123.</p></div>
       <div style={{marginLeft:"4vw"}}><p style={{fontSize:"17px",color:"white"}}>CASE STUDY -<Button style={{color:"black",backgroundColor:"white",marginLeft:"2px",fontWeight:"500",padding:"10px",border:"none"}} className="rounded-pill"> Coming Soon</Button></p></div>
       
       </Col>
     </Row>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>




        </div>
        
    )
}