import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

function WelcomeScreen({navigation}: Props): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.iconContainer}>
            <View style={styles.iconInner}>
              <Text style={styles.icon}>👋</Text>
            </View>
          </View>
          
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Discover amazing features and get started with your journey
          </Text>
        </View>
        
        <View style={styles.featureList}>
          <View style={styles.featureCard}>
            <View style={styles.featureIconWrapper}>
              <Text style={styles.featureIcon}>✨</Text>
            </View>
            <Text style={styles.featureText}>Modern Design</Text>
          </View>
          <View style={styles.featureCard}>
            <View style={styles.featureIconWrapper}>
              <Text style={styles.featureIcon}>🚀</Text>
            </View>
            <Text style={styles.featureText}>Fast Performance</Text>
          </View>
          <View style={styles.featureCard}>
            <View style={styles.featureIconWrapper}>
              <Text style={styles.featureIcon}>🔒</Text>
            </View>
            <Text style={styles.featureText}>Secure & Reliable</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Features')}
          activeOpacity={0.85}>
          <Text style={styles.buttonText}>Explore Features</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  iconContainer: {
    marginBottom: 32,
  },
  iconInner: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#007AFF',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: '#E8F4FD',
  },
  icon: {
    fontSize: 52,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#0A0E27',
    marginBottom: 14,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 17,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 12,
    fontWeight: '400',
  },
  featureList: {
    width: '100%',
    marginVertical: 20,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  featureIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureIcon: {
    fontSize: 22,
  },
  featureText: {
    fontSize: 17,
    color: '#1F2937',
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 18,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#007AFF',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.35,
    shadowRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default WelcomeScreen;
