import Router from './router/index'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
