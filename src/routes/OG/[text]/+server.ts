import type { RequestHandler } from './$types';
import nodeHtmlToImage from 'node-html-to-image'

const OG = `
<html>
    <head>
    <style>
    body {
        font-family: Sans-Serif;
        width: 1200px;
        height: 630px;
      }
    .card {
      background: linear-gradient(to bottom right, #2A2E3E, #181922);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  
    .text-center {
      text-align: center;
      font-size: 5.5rem;
      color: #B5BFE2;
    }
  </style>
  </head>
  <body>
  <div class="card">
    <div class="text-center">{{text}}</div>
  </div>
  </body>
  </html>
`

export const GET: RequestHandler = async ({ params }) => {

    const image = await nodeHtmlToImage({
        html: OG,
        content: { text: params.text },
        quality: 100,
        type: 'jpeg'
    })

    return new Response(image as Buffer, {
        headers: {
            'content-type': 'image/jpeg'
        }
    });
};