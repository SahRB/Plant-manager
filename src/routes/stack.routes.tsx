import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/welcome';
import { UserIdentification } from '../pages/Useridentification';
import { Confirmation } from '../pages/Confirmation';

import colors from '../styles/colors';

const Stack = createStackNavigator(); // Note que é Stack, não stackRoutes

const AppRoutes: React.FC = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false, // Oculta o cabeçalho em todas as telas
    cardStyle: {
      backgroundColor: colors.white
    },
  }}
  >
    <Stack.Screen
      name="Welcome"
      component={Welcome}
    />

    <Stack.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <Stack.Screen
      name="Confirmation"
      component={Confirmation}
    />
  </Stack.Navigator>
)

export default AppRoutes;
