import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const homeElements = [
    {
      "title": "Home",
      "image": require("./assets/home.png"),
      "onPress": () => alert("Pressed home!")
    },
    {
      "title": "Messages",
      "image": require("./assets/message.png"),
      "onPress": () => alert("Pressed messages!")
    },
    {
      "title": "Profile",
      "image": require("./assets/user.png"),
      "onPress": () => alert("Pressed profile!")
    },
    {
      "title": "Settings",
      "image": require("./assets/settings.png"),
      "onPress": () => alert("Pressed settings!")
    }
  ];

  function TabButton(props) {
    return (
      <TouchableOpacity style={styles.tabButton} onPress={props.onPress}>
        <Image
          source={props.image}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.toolKitBar}>

          {homeElements.map((element) => (
            <TabButton
              key={element.title}
              title={element.title}
              image={element.image}
              onPress={element.onPress}
            ></TabButton>
          ))}

        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end"
  },
  toolKitBar: {
    width: "100%",
    height: 50,
    flexDirection: 'row'
  },
  tabButton: {
    flex: 1,
    marginLeft: "2%",
    marginRight: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 5
  },
  tabImage: {
    width: 20,
    height: 20
  }
});
