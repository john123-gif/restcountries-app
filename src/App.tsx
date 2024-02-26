import { HomePage } from './Components/HomePage/HomePage';
import './App.css';
import { useState } from 'react';
import { createContext } from 'react';

interface IThemeContext {
  theme: string,
  setTheme: any
}

export const ThemeContext = createContext({} as IThemeContext)

function App() {
  const [theme, setTheme] = useState('light');
  return <ThemeContext.Provider value={{theme, setTheme}}>
          <HomePage />
        </ThemeContext.Provider>
  
    
}

export default App;
