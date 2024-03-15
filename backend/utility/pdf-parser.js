import {getDocument} from 'pdfjs-dist';
import fs from 'fs';

export default async function parsePdf(pdfPath) {
    const pdf = await getDocument(pdfPath).promise;

    /*
    get page nos
    loop over pages and gather data in a string
     */
    //Limited pdf pages to 1 for now
    const totalPages = pdf.numPages;
    let data = "";
    for (let i = 1; i <= 1; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        data += content.items.map(item => item.str).join(' ');
    }
    return data;
}

