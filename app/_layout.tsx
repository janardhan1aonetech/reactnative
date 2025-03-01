import { Stack } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (<Stack >
    <Stack.Screen name="(drawer)" />
    <Stack.Screen name="(tabs)" />
    <Stack.Screen name="index"  />
    <Stack.Screen name="about"  />       
  </Stack>);
}
