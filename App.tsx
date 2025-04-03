import {ActivityIndicator, StatusBar} from 'react-native'
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import theme from '@theme/index';
import { Loading } from '@components/Loading';
import NewGroup from '@screens/NewGroup';
import { Players } from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return ( 
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players />: <Loading />}
      {/* {fontsLoaded ? <Groups />: <Loading />} */}
      {/* {fontsLoaded ? <NewGroup />: <Loading />} */}
    </ThemeProvider>
  );
}

