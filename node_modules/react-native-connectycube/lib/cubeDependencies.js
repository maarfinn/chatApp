import XMPPClient from '@xmpp/client/react-native';

let ReactNativeWebRTC = {};

try {
  ReactNativeWebRTC = require('react-native-webrtc')
} catch(e) {
  ReactNativeWebRTC = {};
}

global.encodeToBase64 = (input = '') => {
  return require('js-base64').Base64.encode(input)
};

global.decodeFromBase64 = (input = '') => {
  return require('js-base64').Base64.decode(input)
}

const {
  RTCView,
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  MediaStream,
  mediaDevices
} = ReactNativeWebRTC;

module.exports = {
  fetchImpl: fetch,
  formDataImpl: FormData,
  XMPPClient: XMPPClient,
  RTCView: RTCView,
  RTCPeerConnection: RTCPeerConnection,
  RTCSessionDescription: RTCSessionDescription,
  RTCIceCandidate: RTCIceCandidate,
  MediaStream: MediaStream,
  mediaDevices: mediaDevices
}
