// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import data from '../../../../data/dataAlbums.json'
import { IAlbumData } from '../../../types/data';

export default function handler(req: NextApiRequest, res: NextApiResponse<IAlbumData[]>) {
  res.status(200).json(data);
}
