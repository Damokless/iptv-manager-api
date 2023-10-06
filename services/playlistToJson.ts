// modules import
import { parseM3U } from "@iptv/playlist";

/**
 * The function takes a playlist in M3U format and converts it to JSON format, assigning an ID to each
 * channel.
 * @returns an array of channels.
 */

export default async function playlistToJson(body: any) {
  const playlist = parseM3U(body.data);
  const channels: any[] = playlist.channels;

  for (const [index, channel] of channels.entries()) {
    channel.id = index;
  }

  return channels;
}