import index from './index.html';

const isProd = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT) || 3000;

async function serveStaticFile(req: Request): Promise<Response> {
    const filePath = `.${new URL(req.url).pathname}`;
    const file = Bun.file(filePath);
    return (await file.exists())
        ? new Response(file)
        : new Response('Not found', { status: 404 });
}

Bun.serve({
    routes: {
        '/': index,
        '/static/*': serveStaticFile,
    },
    development: !isProd && {
        hmr: true,
        console: true,
    },
    port,
});

console.log(`Server running on http://localhost:${port} (${isProd ? 'production' : 'development'})`);