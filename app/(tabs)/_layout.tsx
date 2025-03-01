import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (<Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
    <Tabs.Screen name="index" options={{tabBarIcon:({color})=><FontAwesome size={28} name="home" color={color}/> }}  />
    <Tabs.Screen name="about" options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }} />       
  </Tabs>);
}
