import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prisma';

type Data = {
	name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const products: any = await prisma.product.findMany();
	res.json(products);
}
