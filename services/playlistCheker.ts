// modules import
import { parseM3U } from "@iptv/playlist";

/**
 * The function takes in a body object, parses it as an M3U playlist, and then iterates through each
 * channel in the playlist to determine its live status by making a HEAD request to the
 * channel's URL.
 * @returns an array of obejects, objects are data from channels.
 */
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