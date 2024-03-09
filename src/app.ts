import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

export const app = fastify();

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Gabriel Lopes',
    email: 'gabriel.lopes.nascimento.dev@gmail.com'
  }
})