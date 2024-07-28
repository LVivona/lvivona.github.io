"use client"
// src/context/ThemeContext.tsx
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';


const easter_egg = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠛⠛⠳⢦⣄⡀⢀⣀⣀⣀⣠⣤⣤⣄⣀⣀⡀⠀⢀⣤⣶⣦⣤⣶⠛⠛⢷⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⠀⠈⠛⢯⣍⠁⠀⠀⠀⠀⠀⠀⠉⠉⣻⣿⡿⣯⣟⡿⣿⣦⠀⠀⠹⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢧⠀⠀⠀⠀⠀⠀⠀⢸⣿⣟⡿⣧⣟⣿⣻⣿⣤⣀⡀⢻⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣴⢾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣯⢿⣽⣿⣿⣿⣟⡿⣿⢿⣿⣿⣷⡀⠀⠀
⠀⠀⠀⠀⠀⣠⡞⠁⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣽⢯⣿⣿⣿⢷⣯⢿⣽⣻⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⣰⠏⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣟⣾⣻⣿⣿⣾⣯⣷⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⢰⡏⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠁⠈⠉⠛⢿⣿⣽⣷⡿⠁⠀⠀
⠀⠀⠀⡿⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⠛⠉⠛⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⣿⡀⠀⠀⠀
⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠁⠀⠀⠀⠀⠸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀
⠘⠒⢿⠷⠶⠤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀⢻⡄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡤⢾⡗⠒⠒⠂
⠀⠀⢸⡆⠀⠀⠀⠈⠩⣏⡛⠲⠆⠀⠀⠀⠀⠀⠀⢀⣦⣄⠀⠈⣷⣿⡄⠀⠀⠀⠀⠀⠀⣿⠀⢀⣠⡶⠀⠁⠀⣼⠇⠀⠀⠀
⠀⠀⠈⣧⠀⠀⠀⠀⠀⠙⢿⣄⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⡆⠀⠘⠛⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⠃⠀⠚⢛⡟⠛⠒⠀⠀
⠀⠀⠀⢹⣆⣀⣤⡤⠶⠞⠛⠻⣷⣄⠀⠀⠀⠀⢸⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⡟⠀⢀⣀⣼⡁⠀⠀⠀⠀
⠀⢠⡴⠞⠻⣍⠀⠀⠀⠀⠀⠀⣹⣿⣧⡀⠀⠀⠀⢿⣿⡿⠃⠀⠀⠀⠀⠀⢠⣴⡶⣤⠀⠀⠀⠀⠀⠀⢠⣾⠿⠿⠷⣦⡀⠀
⠀⠀⠀⠀⠀⠹⣷⠀⠀⠀⣀⡾⠁⠈⢿⣿⣆⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠸⣿⡿⠿⠀⠀⠀⠀⢀⣰⡿⠀⠀⠀⠀⠈⢿⠀
⠀⠀⠀⠀⠀⠀⠘⢳⣤⡾⠋⠀⠀⠀⠈⠻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⣴⣾⣿⣿⠇⠀⠀⠀⠀⠀⣨⡧
⠀⠀⠀⠀⠀⠀⢀⡾⠋⠛⠶⣄⡀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠜⢀⡇
⠀⠀⠀⠀⠀⠰⠟⠁⠀⠀⠀⠈⠉⣳⡶⢦⣤⣼⣿⣿⣿⣿⣿⣿⣿⣏⣾⣿⣿⣿⣿⣿⢻⣿⣿⣿⡟⠁⠀⠀⠀⢀⠎⠀⣸⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠋⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣳⣿⣿⣿⣿⣿⣿⢣⡟⣼⣛⣿⡀⠀⠀⠀⠀⡞⠀⣰⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠁⠀⠀⠀⢸⣟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⡼⣓⢾⡱⢮⡽⣷⣄⣀⡀⣘⣥⢾⠇⠀⠐
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣯⣤⣄⣀⣀⠀⢸⣟⡞⡼⣭⣛⠿⣹⢻⠽⣭⢳⡹⢶⣙⢮⡳⣝⣣⢞⣽⠏⠉⠉⡋⠀⡨⠀⠀⠐
⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⠉⠉⠛⠻⣿⣜⡳⢧⣝⣫⢗⣫⡝⣮⢳⡝⣣⢏⡾⣱⢧⣋⢾⡿⠀⠀⠠⠁⠀⠃⠀⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣝⡳⣎⡳⣎⢧⡻⡜⣧⡛⣵⢫⢞⡵⢮⣝⣾⠃⠀⠀⡈⠀⠀⠀⠀⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⢀⣤⣶⠿⣎⡵⣫⢵⢫⣞⣱⢻⡴⣛⡼⣹⢞⡼⣳⣾⡇⠀⠀⠀⢐⡀⠈⠀⠀⠨⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣄⡀⠀⣀⣤⡿⣏⣗⢻⣬⢳⡝⣮⢳⢎⣧⢳⡝⡮⣵⢣⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠐⡄⢀⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠹⣿⡵⢫⣜⡳⣎⠷⣹⠖⣯⢺⣬⢳⣾⣵⣿⣿⣿⠟⠋⣽⠃⠀⠀⠀⠀⠀⠀⠁⠈⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⢣⡏⣷⡎⡟⣥⢻⡜⣷⣿⣿⣿⢹⡏⠁⠀⣴⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣮⣝⣶⣭⢳⡝⣎⣷⣧⣷⢾⡏⠀⠙⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣍⠉⠙⠛⠙⠉⠉⠁⢀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠲⠶⠶⠖⠖⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);


  useEffect(() => {
    document.documentElement.className = `${isDarkMode ? 'dark' : ''} dark:bg-black bg-white overscroll-y-auto `;
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};

console.log(easter_egg)
console.log("What are you doing in the console?")

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
