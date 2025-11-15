import type { NextApiRequest, NextApiResponse } from "next";
import type { SearchContent, AccessToken } from "spotify-types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const spotifyApiTokenReq = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT}&client_secret=${process.env.SPOTIFY_SECRET}`,
    },
  );

  const spotifyApiToken: AccessToken = await spotifyApiTokenReq.json();
  const accessToken = spotifyApiToken.access_token;

  const spotifyReq = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(`${req.body.name} artist:${req.body.artist}`)}&type=track`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  const json: SearchContent = await spotifyReq.json();

  if (json.tracks === undefined) {
    return res.status(400).send({ message: "Couldn't find URI" });
  }

  const tracks = json.tracks.items;

  if (tracks.length !== 0) {
    res.send({
      uri: tracks[0].uri,
      url: tracks[0].external_urls.spotify,
      image: tracks[0].album.images[0].url,
    });
  } else {
    res.status(400).send({ message: "Couldn't find URI" });
  }
}
