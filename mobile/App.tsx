import React from "react";

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import OrphanagesMap from "./src/pages/OrphanagesMap";
import Routes from "./src/routes";

export default function App() {
  const [fontsloaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  
  console.log("teste")

  if (!fontsloaded) {
    return null;
  }

  return <Routes />;
}
