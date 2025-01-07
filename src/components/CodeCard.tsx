import React from "react";
import { Box, useTheme } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

interface CodeCardProps {
    codeBlock: CodeBlock;
}

const CodeCard: React.FC<CodeCardProps> = ({ codeBlock }) => {
    const theme = useTheme();

    const {
        language,
        code,
        background = "#1e1e1e",
        padding = 16,
        cornerRadius = {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 8,
            bottomRight: 8,
        },
        shadow = {
            offsetX: 0,
            offsetY: 4,
            blur: 10,
            spread: 0,
            color: "#00000066",
        },
    } = codeBlock;

    return (
        <Box
            id={`code-block-${codeBlock.id}`}
            sx={{
                backgroundColor: background,
                padding,
                borderRadius: `${cornerRadius.topLeft}px ${cornerRadius.topRight}px ${cornerRadius.bottomRight}px ${cornerRadius.bottomLeft}px`,
                boxShadow: `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`,
                width: "fit-content",
            }}
        >
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    backgroundColor: "transparent",
                }}
            >
                {code}
            </SyntaxHighlighter>
        </Box>
    );
};

export default CodeCard;
