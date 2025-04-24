import * as mediasoup from 'mediasoup';

mediasoup.setLogEventListeners({
  ondebug: (namespace, message) => {
    console.log(`DEBUG: ${namespace} ${message}`);
  },
  onwarn: (namespace, message) => {
    console.warn(`WARN: ${namespace} ${message}`);
  },
  onerror: (namespace, message, error) => {
    if (error) console.log(`ERROR: ${namespace} ${message} ${error}`);
    else console.error(`ERROR: ${namespace} ${message}`);
  },
})