import * as React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import EditableTimer from './components/EditableTimer';

const { v4: uuidv4 } = require('uuid');

export default class App extends React.Component{  
  state = {
    timers: [
      {
        title: 'Fix the windows',
        project: 'House Chores',
        id: uuidv4(),
        elapsed: 5456099,
        isRunning: true,
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        isRunning: false,
      },
    ],
  };
  render(){
    const { timers } = this.state;

    return (
      <View style={styles.appContainer}>
        <View style={styles.appContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm/>
          { timers.map(({ title, project, id, elapsed, isRunning }) => (
            <EditableTimer 
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15, 
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});
