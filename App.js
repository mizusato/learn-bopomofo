import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './pages/Home'
import About from './pages/About'


const MainNavigator = createStackNavigator (
    { Home, About },
    { initialRouteName: 'Home'}
)

const App = createAppContainer(MainNavigator);

export default App
