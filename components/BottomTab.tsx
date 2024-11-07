import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Welcome from "@/containers/welcome";

const TabArr = [
  {
    route: "Home",
    // label: "Home",
    type: Ionicons,
    activeIcon: "grid",
    inactiveIcon: "grid-outline",
    component: Welcome,
  },
  {
    route: "Cart",
    // label: "Cart",
    type: Ionicons,
    activeIcon: "cart",
    inactiveIcon: "cart-outline",
    component: Welcome, // Replace View with your actual Cart screen component
  },
  {
    route: "profile",
    // label: "Cart",
    type: Ionicons,
    activeIcon: "person",
    inactiveIcon: "person",
    component: Welcome, // Replace View with your actual Cart screen component
  },
];

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            // tabBarLabel: item.label,
            tabBarIcon: ({ focused, color, size }) => {
              const IconComponent = item.type;
              const iconName = focused ? item.activeIcon : item.inactiveIcon;
              return (
                <IconComponent name={iconName} size={size} color={color} />
              );
            },
            tabBarActiveTintColor: "#FF8E3C",
            tabBarInactiveTintColor: "black",
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
