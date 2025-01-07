import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import useExport from "../hooks/useExport";

interface ExportDialogProps {
    open: boolean;
    onClose: () => void;
}

const ExportDialog: React.FC<ExportDialogProps> = ({ open, onClose }) => {
    const { handleExport } = useExport();

    const [format, setFormat] = useState("png");
    const [resolution, setResolution] = useState("FullHD");
    const [filename, setFilename] = useState("my-carbon");

    const handleConfirm = () => {
        handleExport({ format, resolution, filename });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Eksport</DialogTitle>
            <DialogContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    label="Nazwa pliku"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                />
                <FormControl>
                    <InputLabel>Format</InputLabel>
                    <Select
                        value={format}
                        label="Format"
                        onChange={(e) => setFormat(e.target.value as string)}
                    >
                        <MenuItem value="png">PNG</MenuItem>
                        <MenuItem value="jpeg">JPEG</MenuItem>
                        <MenuItem value="svg">SVG</MenuItem>
                        <MenuItem value="pdf">PDF</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Rozdzielczość</InputLabel>
                    <Select
                        value={resolution}
                        label="Rozdzielczość"
                        onChange={(e) =>
                            setResolution(e.target.value as string)
                        }
                    >
                        <MenuItem value="HD">HD (1280 x 720)</MenuItem>
                        <MenuItem value="FullHD">FullHD (1920 x 1080)</MenuItem>
                        <MenuItem value="4K">4K (3840 x 2160)</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Anuluj</Button>
                <Button onClick={handleConfirm} variant="contained">
                    Eksportuj
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExportDialog;
