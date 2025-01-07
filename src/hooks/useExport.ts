import { useCallback } from "react";
import htmlToImage from "html-to-image";
import jsPDF from "jspdf";

interface ExportOptions {
    format: "png" | "jpeg" | "svg" | "pdf";
    resolution: string;
    filename: string;
}

export default function useExport() {
    const handleExport = useCallback(
        async ({ format, resolution, filename }: ExportOptions) => {
            const codeBlocks = document.querySelectorAll<HTMLElement>(
                '[id^="code-block-"]'
            );

            if (format === "pdf") {
                const pdf = new jsPDF("p", "pt", "a4");

                let pageIndex = 0;
                for (const block of Array.from(codeBlocks)) {
                    if (pageIndex > 0) {
                        pdf.addPage();
                    }

                    const dataUrl = await htmlToImage.toPng(block);
                    pdf.addImage(dataUrl, "PNG", 40, 40);

                    pageIndex++;
                }

                pdf.save(`${filename}.pdf`);
            } else {
                codeBlocks.forEach(async (block, i) => {
                    if (format === "svg") {
                        const dataUrl = await htmlToImage.toSvg(block);
                        downloadDataUrl(dataUrl, `${filename}_${i + 1}.svg`);
                    } else if (format === "jpeg") {
                        const dataUrl = await htmlToImage.toJpeg(block, {
                            quality: 0.95,
                        });
                        downloadDataUrl(dataUrl, `${filename}_${i + 1}.jpeg`);
                    } else {
                        const dataUrl = await htmlToImage.toPng(block);
                        downloadDataUrl(dataUrl, `${filename}_${i + 1}.png`);
                    }
                });
            }
        },
        []
    );

    const downloadDataUrl = (dataUrl: string, filename: string) => {
        const link = document.createElement("a");
        link.download = filename;
        link.href = dataUrl;
        link.click();
    };

    return { handleExport };
}
