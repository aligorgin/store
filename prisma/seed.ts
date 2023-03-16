import { Prisma, PrismaClient } from '@prisma/client';

import { products } from '../data/data';

const prisma = new PrismaClient();

async function main() {
	await prisma.product.createMany({
		data: products
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
