import type { RequestHandler } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
    runtime: 'nodejs18.x',
};

import fs from 'fs';
import util from 'util';

// Convert fs.readFile into a Promise-based function
const readFile = util.promisify(fs.readFile);

// Function to get a file as a Blob from a specified path
async function getFileAsBlob(filePath: string) {
    try {
        // Read the file asynchronously
        const fileData = await readFile(filePath);

        // Create a Blob from the file data
        const blob = new Blob([fileData], { type: 'application/octet-stream' });
        return blob;
    } catch (error) {
        console.error("Error while reading file:", error);
        return null;
    }
}

function getFileTypeAndExtension(fileName: string) {
    const videoExtensions = ['mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv', 'webm'];
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];

    const fileParts = fileName.split('.');
    const extension = fileParts[fileParts.length - 1];

    if (videoExtensions.includes(extension)) {
        return { type: 'video', extension };
    } else if (imageExtensions.includes(extension)) {
        return { type: 'image', extension };
    } else {
        return { type: 'unknown', extension };
    }
}

function isFile(str: string) {
    const parts = str.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.includes('.') && lastPart.indexOf('.') < lastPart.length - 1;
}

export const GET: RequestHandler = async ({ params }) => {
    if (!isFile(params.filename)) {
        return new Response('Unauthorized', {
            status: 401
        })
    }
    const file = await getFileAsBlob(`./src/posts/${params.post}/attachments/${params.filename}`)
    const { type, extension } = getFileTypeAndExtension(params.filename)
    if (type == 'video') {
        return new Response(file, {
            headers: {
                "content-type": `video/${extension}`
            }
        });
    } else if (type == 'image') {
        return new Response(file, {
            headers: {
                "content-type": `image/${extension}`
            }
        });
    } else {
        return new Response();
    }
};