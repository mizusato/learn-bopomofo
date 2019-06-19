import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './pages/Home'
import { Pages } from './pages/tutorial/Index'


const MainNavigator = createStackNavigator (
    Object.assign({ Home }, Pages),
    { initialRouteName: 'Home'}
)

const App = createAppContainer(MainNavigator);

export default App
