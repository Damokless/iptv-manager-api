import { writeM3U } from "@iptv/playlist";
export default async function jsonToPlaylist(body: any) {

  const m3u = writeM3U(body);

  return {"m3uText" : m3u}
}