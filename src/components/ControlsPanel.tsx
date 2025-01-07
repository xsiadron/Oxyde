import React from "react";
import { Paper, Stack, Typography, TextField } from "@mui/material";
import ThemeSelector from "./ThemeSelector";

const ControlsPanel: React.FC = () => {
    return (
        <Paper sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h6" gutterBottom>
                Ustawienia globalne
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
                <ThemeSelector />
                <TextField
                    label="Zaokrąglenie rogów"
                    type="number"
                    size="small"
                />
                <TextField label="Shadow color" type="text" size="small" />
            </Stack>
        </Paper>
    );
};

export default ControlsPanel;
