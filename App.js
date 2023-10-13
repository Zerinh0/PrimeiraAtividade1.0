import React from "react";
import { Text, Image} from "react-native";


function App() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 

  return (
    <><Text>  </Text><><><><><Text style={{ fontSize: 30 }}>   Bem-Vindo ao Meu App!</Text>
      <Text>  </Text>
      <Text>Esse app é pra dizer que 2+2 pode ser igual a {res} (as vezes não é) </Text>
    </><Text> </Text>
      <Text>(☞ﾟヮﾟ)☞ ----------------- Números:----------------- ☜(ﾟヮﾟ☜)</Text></>
      <Text> </Text>
      <Text>(☞ﾟヮﾟ)☞     {numeros.join(' , ')}      ☜(ﾟヮﾟ☜)</Text></>
      <Text> </Text>
      <Text>  </Text>
      <Text> </Text>
      <Image source={require("./images/imagem2.jpg")} style={{ width: 360, height: 300 }}></Image></></>
  );
}

const res = 2 + 2;

export default App;