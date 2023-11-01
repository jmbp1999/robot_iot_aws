import { device as _device } from 'aws-iot-device-sdk';

var x = 0;
var y = 0;

const device = _device({
    clientId: '9c0a8e4a-70e3-11ee-b962-0242ac120002',
    host: 'a3apm3sagumwi6-ats.iot.ap-south-1.amazonaws.com',
    port: 8883,
    keyPath: './AWS_secrets/private.pem.key',
    certPath: './AWS_secrets/certificate.pem.crt',
    caPath: './AWS_secrets/AmazonRootCA1.pem',
});

device.on('connect', function() {
    console.log('connecting');
    sendSensorData();
});

device.on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
});

function sendSensorData() {
    // Generate random temperature data for demonstration
    device.publish('topic_1', JSON.stringify({ coordinates: [x, y] }), function() {
        console.log({ coordinates: [x, y] });
        createPath();
        setTimeout(sendSensorData, 1000); // 10-second delay
    });
}

function createPath() {
    if (x === y) {
        x = x + 1;
    } else if (x > y) {
        y = y + 3;
    } else if (y > x) {
        x = x + 1;
    }
}
