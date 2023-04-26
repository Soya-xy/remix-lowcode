# Remix Turborepo Vercel

Turborepo monorepo + Remix + Prisma + Antd

## Development

```sh
pnpm install

# 初始化数据库
cd packages/prisma
npx prisma migrate dev --name init 
pnpm run db:generate

# 启动服务
pnpm run dev
```
