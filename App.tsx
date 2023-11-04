/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import { 
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
} from 'react-native';
/* import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Hello now">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
}); */

const styles = StyleSheet.create({
  counterContainer: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
  },
  displayScreen: {
    justifyContent:'center',
    //alignItems: 'center',
    flex: 1,
    backgroundColor: 'pink',
    //marginHorizontal: 16,
  },
  buttonSave: {
    marginVertical: 8,
    marginHorizontal: 45,
  },
  buttonCount: {
    //borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    fontSize: 18,
  },
});

function App(): JSX.Element {
  const [counter, setCounter] = useState(0);

  function increaseCount(): void {
    setCounter(counter+1);
  }
  
  function decreaseCount(): void {
    setCounter(counter-1);
  }

  function saveCounter(): void {
    //save counter
    // reset counter to 0
  }
  
  let renderCount = (): JSX.Element => {
    return (
      <View>
        <TextInput
          style={styles.counterContainer}
          defaultValue={String(counter)}
          keyboardType='numeric'
          onChangeText={newText => setCounter(Number(newText))}
        />
      </View>
    );
  }
  
  let renderButtonsCounter = (): JSX.Element =>{
    return (
      <View>
        <View
          style={styles.buttonCount}
        >
          <Button 
            title='decrease count'
            onPress ={() => decreaseCount()}
          />
          <Button 
            title='increase count'
            onPress ={() => increaseCount()}
          />
        </View>
        <View
          style={styles.buttonSave}
        >
          <Button
            title='Save'
            disabled={counter===0? true : false}
            onPress={() => saveCounter()}
          />
        </View>
      </View>
    )
  }

  return (
  <SafeAreaView
    style={styles.displayScreen}
  >
    {renderCount()}
    {renderButtonsCounter()}
  </SafeAreaView>
  );
}

export default App;
