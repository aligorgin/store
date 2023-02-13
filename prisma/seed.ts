import { PrismaClient } from '@prisma/client';

import { products } from '../data/data';

const prisma = new PrismaClient();

async function main() {
	console.log('Start seeding...');
  await prisma.product.createMany({
    data:products
  })
	console.log(`Seeding finished.`);
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
