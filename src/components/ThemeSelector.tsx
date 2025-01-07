import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ThemeSelector: React.FC = () => {
    const themes = ["vscDarkPlus", "dracula", "okaidia", "duotoneDark"];

    const [selectedTheme, setSelectedTheme] = React.useState("vscDarkPlus");

    const handleChange = (e: any) => {
        setSelectedTheme(e.target.value);
    };

    return (
        <FormControl size="small">
            <InputLabel id="theme-select-label">Motyw</InputLabel>
            <Select
                labelId="theme-select-label"
                id="theme-select"
                label="Motyw"
                value={selectedTheme}
                onChange={handleChange}
            >
                {themes.map((theme) => (
                    <MenuItem key={theme} value={theme}>
                        {theme}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ThemeSelector;
