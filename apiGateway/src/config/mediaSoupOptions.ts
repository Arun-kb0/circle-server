import * as mediasoup from 'mediasoup';
import { Consumer, Producer, Router, WebRtcTransport, Worker } from 'mediasoup/types';

const SERVER_IP = process.env.MSOUP_SERVER_IP || '0.0.0.0'
const ANNOUNCED_IP = process.env.MSOUP_ANNOUNCED_IP || undefined

interface MediaSoupOptions {
  worker: {
    rtcMinPort: number;
    rtcMaxPort: number;
    logLevel: mediasoup.types.WorkerLogLevel;
  };
  router: {
    mediaCodecs: any[];
  };
  webRtcTransport: {
    listenIps: { ip: string; announcedIp?: string }[];
    enableUdp: boolean;
    enableTcp: boolean;
    preferUdp: boolean;
    initialAvailableOutgoingBitrate: number
  };
}

export const mediaSoupOptions: MediaSoupOptions = {
  worker: {
    rtcMinPort: 4000,
    rtcMaxPort: 4020,
    // logLevel: 'warn'
    logLevel: 'debug'
  },
  router: {
    mediaCodecs: [
      {
        kind: 'audio',
        mimeType: 'audio/opus',
        clockRate: 48000,
        channels: 2,
      },
      {
        kind: 'video',
        mimeType: 'video/VP8',
        clockRate: 90000,
        parameters: {},
      },
    ]
  },
  webRtcTransport: {
    listenIps: [
      {
        ip: SERVER_IP, // Replace with your server's public or private IP
        announcedIp: ANNOUNCED_IP, // Use null if there is no public IP to announce
      },
    ],
    enableUdp: true,
    enableTcp: true,
    preferUdp: true,
    initialAvailableOutgoingBitrate: 1000000, // Set an initial bitrate
  },

}

let worker: Worker
let router: Router

export const transports: { [socketId: string]: WebRtcTransport } = {};
export const producers: { [socketId: string]: Producer } = {};
export const consumers: { [socketId: string]: Consumer } = {};

(async () => {
  try {
    worker = await mediasoup.createWorker({
      rtcMinPort: 4000,
      rtcMaxPort: 4020,
      logLevel: 'warn',
      logTags: ['info', 'ice', 'dtls', 'rtp', 'srtp', 'rtcp'],
    });

    worker.on('died', () => {
      console.error('Mediasoup worker died, exiting in 2 seconds...');
      setTimeout(() => process.exit(1), 2000);
    });

    router = await worker.createRouter({
      mediaCodecs: [
        {
          kind: 'audio',
          mimeType: 'audio/opus',
          clockRate: 48000,
          channels: 2,
        },
        {
          kind: 'video',
          mimeType: 'video/VP8',
          clockRate: 90000,
          parameters: {
            'x-google-start-bitrate': 1000
          },
        },
      ],
    });


    console.log('Mediasoup worker and router created successfully.');
  } catch (err) {
    console.error('Error creating Mediasoup worker/router:', err);
  }
})();

export { router }



