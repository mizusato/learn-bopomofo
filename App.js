import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './pages/home'
import About from './pages/about'


const MainNavigator = createStackNavigator (
    { Home, About },
    { initialRouteName: 'Home'}
)

const App = createAppContainer(MainNavigator);

export default App
