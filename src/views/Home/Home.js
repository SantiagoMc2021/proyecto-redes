import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./boxes.css";
import {View, ImageBackground, StyleSheet, Text, Dimensions} from "react-native"
import imgr from "./ola.png"

const styles = StyleSheet.create({
  container: 
  {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    padding: 0,
  },
  AuronPlaya: {
    flex: 1,
    backgroundColor: "black",
    resizeMode: "cover",
    }
  }
)

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  })
  return (
    <>
  <ImageBackground style={styles.container}
      source= {{uri: imgr}}
      blurRadius={10}>
        <View style={{ padding: Dimensions.get("window").height/4}}>
            <div data-aos="fade-right"> 
              <Text style={{fontSize: 70, textAlign: "right"}}>
               Una Gaming House
              </Text>
            </div>  
              <div data-aos="fade-up"> 
                <Text style={{fontSize: 25}}>¿Qué es?</Text>
              </div>
              <br></br><br></br><br></br>
              <Text style={{fontSize: 30, textAlign: "center"}}>
                PC master race, una comunidad
              </Text>
        </View>
        <View style={{textAlign: "right", 
          paddingRight: Dimensions.get("window").width/40, 
          paddingTop: Dimensions.get("window").height/12}}>
          <div data-aos="fade-up">
            <Text style={{fontSize: 15}}>
            Old English gamen ‘amusement, fun’, </Text>
            <br></br>
            <Text>gamenian ‘play, amuse oneself’, 
              of Germanic origin.</Text>
          </div>
        </View>
  </ImageBackground>
    <View  style={{
    height: Dimensions.get("window").height*2,
    width: Dimensions.get("window").width,
    paddingTop: Dimensions.get("window").height/4,
    flexDirection: "row"
  }}>
    <View style={{flex: 0.7, textAlign: "center"}} >
    <div data-aos="fade-up">   
      <Text style={{fontSize: 20}}>
        Te ofrecemos varias experiencias
      </Text>
    </div>
    <br></br><br></br><br></br><br></br>
      <Text>
        Foto del arbol de distribuciones de los pisos
      </Text>
    </View>

    <View style={{flex: 0.5, textAlign: "center", paddingTop: Dimensions.get("window").height/3.5}} >
    <div data-aos="fade-up">
    <Text>
      [Foto_1]
    </Text>
    <br></br>
    <Text>
      [Foto_2]
    </Text>
    <br></br>
    <Text>
      [Foto_3]
    </Text>
    </div>
    </View>
  </View>
  <ImageBackground style={styles.container}
    source= {{uri: imgr}}
    blurRadius={10}>
      
  </ImageBackground>
  </>
  );
}

export default Home;