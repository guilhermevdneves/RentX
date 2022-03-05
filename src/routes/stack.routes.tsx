import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Schedule from "../screens/Schedule";
import ScheduleDetails from "../screens/ScheduleDetails";
import ScheduleComplete from "../screens/ScheduleComplete";

const { Navigator, Screen } = createNativeStackNavigator();


export default function StackRoutes() {

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="a"
        component={Home}
      />

      <Screen
        name="b"
        component={CarDetails}
      />

      <Screen
        name="c"
        component={Schedule}
      />

      <Screen
        name="d"
        component={ScheduleDetails}
      />

      <Screen
        name="e"
        component={ScheduleComplete}
      />

    </Navigator>


  )


}