import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import successImg from "../../images/success.png";
import { useNavigation } from "@react-navigation/native";

const Success: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={successImg} />

      <Text style={styles.title}>Ebaaa!</Text>
      <Text style={styles.description}>
        Agora é só esperar um administrador {"\n"}
        aprovar seu cadastro 😍
      </Text>
      <View>
        <RectButton style={styles.button} onPress={handleNavigateToHome}>
          <Text style={styles.buttonText}>Voltar ao início</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Success;
