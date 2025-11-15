import { useEffect, useState } from "react";
import { useLastFM } from "use-last-fm";

type SpotifyReturnData = {
  uri: string;
  url: string;
  image: string;
};

export function useSong() {
  const lastFM = useLastFM(
    "dvelo",
    process.env.NEXT_PUBLIC_LASTFM as string,
    5000,
    "large",
  );``

  const [lastSong, setLastSong] = useState({ name: "", artist: "" });
  const [linkURI, setURI] = useState("");
  const [songURL, setURL] = useState("");
  const [albumArt, setImg] = useState<string | undefined>(undefined);
  const [previousSet, setPreviousSet] = useState(false);

  useEffect(() => {
    (async () => {
      if (lastFM.status === "playing") {
        if (previousSet === false) {
          setPreviousSet(true);
          setLastSong({ name: lastFM.song.name, artist: lastFM.song.artist });
        }

        if (
          lastSong.name !== lastFM.song.name ||
          lastSong.artist !== lastFM.song.artist
        ) {
          setURI("");
          setImg("");

          const spotify = await fetch("/api/getSpotifyURL", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: lastFM.song.name,
              artist: lastFM.song.artist,
            }),
          });

          if (spotify.status === 400) {
            setLastSong({
              name: lastFM.song.name,
              artist: lastFM.song.artist,
            });
          } else {
            const jsonData: SpotifyReturnData = await spotify.json();

            setLastSong({
              name: lastFM.song.name,
              artist: lastFM.song.artist,
            });
            setURI(jsonData.uri);
            setImg(jsonData.image);
            setURL(jsonData.url);
          }
        }
      }
    })();
  }, [lastFM, previousSet, lastSong]);

  return { albumArt, linkURI, lastSong, lastFM, songURL };
}
