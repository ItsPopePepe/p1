export default function handler(req, res) {
  const REVEAL = false;
  const PLACEHOLDER_IMAGE = 'https://itspopepe.xyz/place.png';
  const IPFS_BASE_URI = 'https://bafybeibqmfhkmiu5lqktiv72wdmljvplvy7t2bpudcs6b4p7nzpgsijxl4.ipfs.dweb.link/';

  const { id } = req.query;
  const tokenId = parseInt(id || '');

  if (isNaN(tokenId)) {
    return res.status(400).json({ error: 'Token ID must be a number' });
  }

  if (!REVEAL) {
    return res.status(200).json({
      name: `PopePepe #${tokenId}`,
      description: 'The PopePepe collection is currently unrevealed. Stay tuned.',
      image: PLACEHOLDER_IMAGE,
      attributes: [],
    });
  }

  const redirectUrl = `${IPFS_BASE_URI}${tokenId}.json`;
  res.redirect(302, redirectUrl);
}
