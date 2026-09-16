import { kv } from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const links = [
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM11",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM12",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM13",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM14",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM15",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM16",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM17",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM18",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM19",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM20",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM21",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM22",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM23",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM24",
    "https://vip.mixclips.top/mix44vip/?utm_source=Saim&utm_medium=SIAM25"
  ];

  try {
    const nextIndex = await kv.incr('redirect_index');
    const selectedIndex = (nextIndex - 1) % links.length;

    return Response.redirect(links[selectedIndex], 302);
  } catch (error) {
    return Response.redirect(links[0], 302);
  }
}
