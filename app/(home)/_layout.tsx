import React from "react";
import { Tabs, useRouter } from "expo-router";
import { Home, ClipboardList, Heart, User } from "lucide-react-native";

const BottomTabNavigator = () => {
  const router = useRouter();

  const getTabIcon = (route: any, focused: any) => {
    const iconProps = {
      size: focused ? 28 : 24,
      color: focused ? "#6F3995" : "#929292",
      strokeWidth: focused ? 2.5 : 2,
    };

    switch (route.name) {
      case "RecordsScreen":
        return <ClipboardList {...iconProps} />;
      case "HomePage":
        return <Home {...iconProps} />;
      case "HealthProfile":
        return <Heart {...iconProps} />;
      default:
        return <User {...iconProps} />;
    }
  };

  return (
    <Tabs
      initialRouteName="HomePage"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabIcon(route, focused),
        tabBarActiveTintColor: "#6F3995",
        tabBarInactiveTintColor: "#929292",
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 20,
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          shadowOpacity: 0.1,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: -5,
        },
      })}
    >
      <Tabs.Screen
        name="RecordsScreen"
        options={{
          title: "Records",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="HomePage"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="HealthProfile"
        options={{
          title: "Health",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default BottomTabNavigator;
