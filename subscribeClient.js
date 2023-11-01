import { device as _device } from 'aws-iot-device-sdk';

const device = _device({
    clientId: '94a63b36-70e3-11ee-b962-0242ac120002',
    host: 'a3apm3sagumwi6-ats.iot.ap-south-1.amazonaws.com',
    port: 8883,
    keyPath: './AWS_secrets/private.pem.key',
    certPath: './AWS_secrets/certificate.pem.crt',
    caPath: './AWS_secrets/AmazonRootCA1.pem',
});


 device
 .on('connect', function() {
   console.log('connected');
   device.subscribe('topic_1');
 });

device
 .on('message', function(topic, payload) {
   console.log('message', topic, payload.toString());
 });