import type { PrismaClient as ImportedPrismaClient } from '@prisma/client';
import { createRequire } from 'module';

const required = createRequire(import.meta.url ?? __filename);

const { PrismaClient: RequiredPrismaClient } = required('@prisma/client');

const _PrismaClient: typeof ImportedPrismaClient = RequiredPrismaClient;

export class PrismaClient extends _PrismaClient { }
