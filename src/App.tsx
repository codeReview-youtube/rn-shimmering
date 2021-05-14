import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Shimmering from './Shimmering';

const {width: screenWidth} = Dimensions.get('screen');
const width = screenWidth * 0.92 - 30;
const list = new Array(10).fill(undefined).map((val, index) => ({
  id: index,
  name: 'name',
}));
const App = () => {
  const [fetching, setFetching] = useState(true);

  // useEffect(() => {
  //   // This where data should be fetched and setState can be applied
  //   setTimeout(() => {
  //     setFetching(true);
  //   }, 10000);
  // }, []);

  const renderList = () => {
    return list.map((val, index) => (
      <React.Fragment key={index}>
        <View style={styles.profileWrapper}>
          <Shimmering
            wrapperStyle={{width: 60, height: 60, borderRadius: 30}}
          />
          <View style={styles.profile}>
            <Shimmering
              wrapperStyle={{
                width: width * 0.5,
                height: 25,
                borderRadius: 5,
              }}
            />
            <Shimmering
              wrapperStyle={{
                width: width * 0.9,
                height: 30,
                borderRadius: 5,
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View style={styles.postWrapper}>
          <Shimmering
            wrapperStyle={{
              borderRadius: 10,
              width: width * 1.12,
              height: 100,
            }}
          />
        </View>
      </React.Fragment>
    ));
  };
  return (
    <ScrollView style={styles.container}>
      {fetching ? (
        renderList()
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Hello React Native</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 10,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    marginHorizontal: 10,
  },
  postWrapper: {
    marginVertical: 10,
  },
});

export default App;
