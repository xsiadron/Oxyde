import { useState } from "react";
import { Stack, Button } from "@mui/material";
import CodeCard from "./CodeCard";

interface CodeBlock {
    id: number;
    language: string;
    code: string;
    background?: string;
    padding?: number;
    cornerRadius?: {
        topLeft: number;
        topRight: number;
        bottomLeft: number;
        bottomRight: number;
    };
    shadow?: {
        offsetX: number;
        offsetY: number;
        blur: number;
        spread: number;
        color: string;
    };
}

const CodeCardList = () => {
    const [codeBlocks, setCodeBlocks] = useState<CodeBlock[]>([
        {
            id: 1,
            language: "javascript",
            code: `function helloWorld() {\n  console.log("Hello World");\n}`,
        },
    ]);

    const addNewCodeBlock = () => {
        setCodeBlocks((prev) => [
            ...prev,
            {
                id: Date.now(),
                language: "typescript",
                code: "// Nowy blok kodu",
            },
        ]);
    };

    return (
        <>
            <Stack spacing={2} sx={{ marginTop: 3 }}>
                {codeBlocks.map((block) => (
                    <CodeCard key={block.id} codeBlock={block} />
                ))}
            </Stack>
            <Button
                variant="outlined"
                onClick={addNewCodeBlock}
                sx={{ marginTop: 2 }}
            >
                Dodaj blok kodu
            </Button>
        </>
    );
};

export default CodeCardList;
