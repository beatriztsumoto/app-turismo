import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import PontosTuristicosScreen from '../screens/PontosTuristicosScreen';
import RestaurantesScreen from '../screens/RestaurantesScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import SobreScreen from '../screens/SobreScreen';
import ContatoScreen from '../screens/ContatoScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';

import { COLORS, SPACING } from '../constants/theme.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ── Stack wrapping PontosTuristicos (list + detalhes)
function PontosStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListaPontos" component={PontosTuristicosScreen} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} />
    </Stack.Navigator>
  );
}

// ── Stack wrapping Restaurantes (list + detalhes)
function RestaurantesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListaRestaurantes" component={RestaurantesScreen} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} />
    </Stack.Navigator>
  );
}

// ── Stack wrapping Home (home screen)
function HomeStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

// ── Custom TabBar
function CustomTabBar({ state, descriptors, navigation }) {
  const tabs = state.routes;
  return (
    <View style={tabStyles.tabBar}>
      {tabs.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={[tabStyles.tab, isFocused && tabStyles.tabActive]}
            onPress={onPress}
            activeOpacity={0.85}
          >
            <Text style={[tabStyles.tabLabel, isFocused && tabStyles.tabLabelActive]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const tabStyles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryDark,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    height: 48,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: COLORS.accent,
    backgroundColor: COLORS.surface,
  },
  tabLabel: {
    color: COLORS.textMuted,
    fontSize: 14,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: COLORS.text,
    fontWeight: '700',
  },
});

// ── Custom Header
function CustomHeader({ title, navigation, showMenuButton = true }) {
  return (
    <View style={headerStyles.header}>
      {showMenuButton ? (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={headerStyles.iconBtn}>
          <Text style={headerStyles.icon}>☰</Text>
        </TouchableOpacity>
      ) : (
        <View style={headerStyles.iconBtn} />
      )}
      <Text style={headerStyles.title}>{title}</Text>
      <View style={headerStyles.iconBtn}>
        <Text style={headerStyles.icon}>👤</Text>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDark,
    paddingTop: 44,
    paddingBottom: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  title: {
    flex: 1,
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  iconBtn: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.text,
    fontSize: 20,
  },
});

// ── Tabs Navigator (Pontos + Restaurantes) com header customizado
function TabsNavigator({ navigation }) {
  return (
    <>
      <CustomHeader title="Guia Turístico" navigation={navigation} />
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="PontosTuristicos"
          component={PontosStack}
          options={{ tabBarLabel: 'Pontos Turísticos' }}
        />
        <Tab.Screen
          name="Restaurantes"
          component={RestaurantesStack}
          options={{ tabBarLabel: 'Restaurantes' }}
        />
      </Tab.Navigator>
    </>
  );
}

// ── Drawer Navigator (envolve as Tabs)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.background,
            width: 280,
          },
        }}
      >
        <Drawer.Screen name="HomeTab" component={TabsNavigator} />
        <Drawer.Screen
          name="Sobre"
          component={SobreScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader title="Sobre" navigation={navigation} showMenuButton={true} />
            ),
            headerShown: true,
          })}
        />
        <Drawer.Screen
          name="Contato"
          component={ContatoScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader title="Contato" navigation={navigation} showMenuButton={true} />
            ),
            headerShown: true,
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
