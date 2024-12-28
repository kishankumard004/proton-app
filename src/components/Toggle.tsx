import { FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'
import { lightTheme, darkTheme } from "../theme";
import toggleProps from '../models/ToggleTheme';
import { Brightness4, Brightness7 } from '@mui/icons-material';
const Toggle: React.FC<toggleProps> = ({ darkMode, toggleTheme })  => {
  return (
    <div>
      <div style={{ padding: "20px" }}>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={toggleTheme} />}
              label={darkMode ? <Brightness7 /> : <Brightness4 />}
            />   
            </div>
    </div>
  )
}

  

export default Toggle
