import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./boxes.css";
import {View, ImageBackground, Text, Dimensions, Image} from "react-native"
import imgr from "./ola.png"
import distr from "./Distribucion.png"

// Tipos de PCs
import triple_a from "./tipos/aaa.jpg"
import dota from "./tipos/dota.jpg"
import tft2 from "./tipos/tft2.jpg"


const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  })
console.log(Dimensions.get("window").height*2);
  return (
    <>
  <View style={{resizeMode: "cover"}}>
    <ImageBackground 
      style= {{height: 960, resizeMode: "cover"}}
      source= {{uri: imgr}}
      blurRadius={10}>
        <View style={{ paddingTop: Dimensions.get("window").height/10, paddingLeft: 90}}>
            <div data-aos="fade-right"> 
              <Text style={{fontSize: 70, textAlign: "right"}}>
               Una Gaming House
              </Text>
            </div>  
              <div data-aos="fade-up"> 
                <Text style={{fontSize: 25}}>¿Qué es?</Text>
              </div>
              <br></br><br></br><br></br>
              <Text style={{fontSize: 30, textAlign: "center", paddingTop: Dimensions.get("window").height/6}}>
                PC master race, una comunidad
              </Text>
        </View>
        <View style={{textAlign: "right", 
          paddingRight: Dimensions.get("window").width/40, 
          paddingTop: Dimensions.get("window").height/3}}>
          <div data-aos="fade-up">
            <Text style={{fontSize: 15}}>
            Old English gamen ‘amusement, fun’, </Text>
            <br></br>
            <Text>gamenian ‘play, amuse oneself’, 
              of Germanic origin.</Text>
          </div>
        </View>
    </ImageBackground>
  </View>
  
  <View  style={{
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
  flexDirection: "row", backgroundColor: "#082b37",
  resizeMode: "cover"}}
  >
    <View style={{flex: 0.4, textAlign: "center", paddingTop: Dimensions.get("window").height/50}} >  
      <Text style={{fontSize: 20}}>
        Nuestros ambientes
      </Text>
    
      <Image 
        style= {{flex: 0.7, width: null, height: null, resizeMode: 'center'}}
        source= {{uri: distr}}>

      </Image>
    </View>
    <View style={{flex: 0.6, 
          flexDirection:"row",
          resizeMode: "cover",
          height: Dimensions.get("window").height/4,
          width: Dimensions.get("window").width*2}}>
      <View style={{flex: 0.5, paddingTop: 50, textAlign: "center"}}>
        
        <Text style={{paddingTop: 90, fontSize: 40}}>
          Dota 2      
        </Text>
        <Text style={{paddingTop: 180, fontSize: 20}}>
          Máquinas super High End para juegos AAA
        </Text>
        <Text style={{paddingTop: 180, fontSize: 20}}>
          Team Fortress 2
        </Text>
      </View>

      <View style={{flex: 0.5, paddingTop: 50}}>
      <div data-aos="fade-right"> 
        <Image 
            style= {{width: Dimensions.get("window").width/4.5, 
            height: Dimensions.get("window").height/4.5,
            paddingTop: Dimensions.get("window").height/20
            }}
            source= {{uri: dota}}
            >
        </Image>
        </div>
        <br></br>
        <div data-aos="fade-right"> 
        <Image 
            style= {{width: Dimensions.get("window").width/4.5, 
            height: Dimensions.get("window").height/4.5, 
            resizeMode: 'center',
            paddingTop: Dimensions.get("window").height/20}}
            source= {{uri: triple_a}}
            >
        </Image>
        </div>
        <br></br>
        <div data-aos="fade-right"> 
        <Image 
            style= {{width: Dimensions.get("window").width/4.5, 
            height: Dimensions.get("window").height/4.5, 
            resizeMode: 'center',
            paddingTop: Dimensions.get("window").height/20}}
            source= {{uri: tft2}}
            >
        </Image>
        </div>
      </View>            
    </View>
  </View>
  
  <View style={{
  height: Dimensions.get("window").height/3,
  width: Dimensions.get("window").width,
  flexDirection: "row", backgroundColor: "#0000",
  resizeMode: "cover"}}>
    <View style={{flex: 0.7, paddingTop: 50, textAlign: "center"}}>
    <div data-aos="fade-right">   
      <Text style={{fontSize: 50}}>
        Sobre nosotros
      </Text>
    </div>
    <div data-aos="fade-right"> 
      <Text style={{fontSize: 20, paddingTop: Dimensions.get("window").height/50}}>
        Santiago Madariaga
      </Text>
      </div>
      <div data-aos="fade-right"> 
      <Text style={{fontSize: 20, paddingTop: Dimensions.get("window").height/50}}>
        Eduardo Quito
      </Text>
      </div>
      <div data-aos="fade-right"> 
      <Text style={{fontSize: 20, paddingTop: Dimensions.get("window").height/50}}>
        Alex Pocohuanca
      </Text>
      </div>
      <div data-aos="fade-right"> 
      <Text style={{fontSize: 20, paddingTop: Dimensions.get("window").height/50}}>
        Leonardo Castilla
      </Text>
      </div>
    </View>

    <View style={{flex: 0.7, paddingTop: 150, textAlign: "center"}}>
    <div data-aos="fade-up"> 
      <Text style={{fontSize: 20}}>
        Ingenieros de la Universidad de Ingeniería y Tecnología
      </Text>
      </div>
    </View>
  </View>
  </>
  );
}

export default Home;