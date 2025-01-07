import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import CodeCardList from "./components/CodeCardList";
import ControlsPanel from "./components/ControlsPanel";
import ExportDialog from "./components/ExportDialog";

function App() {
    const [openExportDialog, setOpenExportDialog] = useState(false);

    return (
        <Container sx={{ paddingY: 4 }}>
            <Typography variant="h4" gutterBottom>
                Carbon-like App
            </Typography>

            <ControlsPanel />

            <CodeCardList />

            <Button
                variant="contained"
                color="primary"
                onClick={() => setOpenExportDialog(true)}
                sx={{ marginTop: 4 }}
            >
                Eksportuj
            </Button>

            <ExportDialog
                open={openExportDialog}
                onClose={() => setOpenExportDialog(false)}
            />
        </Container>
    );
}

export default App;
