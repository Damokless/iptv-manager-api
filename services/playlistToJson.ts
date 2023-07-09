import { parseM3U } from "@iptv/playlist";

export default async function playlistToJson(body: any) {
  const playlist = parseM3U(body.data);
  const channels: any[] = playlist.channels;

  for (const [index, channel] of channels.entries()) {
    channel.id = index;
  }

  return channels;
}