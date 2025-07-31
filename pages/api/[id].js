import combinedMapping from './combined_mapping.json'; // Adjust path if needed

export default function handler(req, res) {
  const { id } = req.query;
  const tokenId = parseInt(id, 10);

  if (isNaN(tokenId)) {
    return res.status(400).json({ error: 'Token ID must be a number' });
  }

  const tokenData = combinedMapping[tokenId];

  if (!tokenData) {
    return res.status(404).json({ error: 'Metadata not found for this token ID' });
  }

  const redirectUrl = `https://gateway.lighthouse.storage/ipfs/${tokenData.metadataCid}/${tokenId}.json`;
  return res.redirect(302, redirectUrl);
}
