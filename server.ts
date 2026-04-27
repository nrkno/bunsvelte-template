import index from './index.html';

const isProd = process.env.NODE_ENV === 'production';

Bun.serve({
    routes: {
        '/': index,
    },
    // @ts-ignore
    static: {
        '/static': './static',
    },
    development: !isProd && {
        hmr: true,
        console: true,
    },
    port: Number(process.env.PORT) || 3000,
});

console.log(`⚙️ Applications runs on http://localhost:3000 (${isProd ? 'production' : 'development'})`);