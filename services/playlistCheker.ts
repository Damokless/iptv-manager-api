import { parseM3U } from "@iptv/playlist";

export default async function proxy(body: any) {
  const playlist = parseM3U(body.data);
  const channels: any[] = playlist.channels;

  for (const [index, channel] of channels.entries()) {
    channel.id = index;
    channel.liveStatus = await fetch(`${channel.url}`, { method: 'HEAD', signal: AbortSignal.timeout( 3000 ) }).then((response) => {
      return response.status
    })
    .catch(() => {
      return 400
    });
  }
  return channels;
}