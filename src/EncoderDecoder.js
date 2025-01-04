import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, Button, Form, Alert } from 'react-bootstrap';


function EncoderDecoder() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [key, setKey] = useState('');


    const encodeBase64 = (str) => btoa(str);
    const decodeBase64 = (str) => {
        try {
            return atob(str);
        } catch (e) {
            return 'Invalid encoded string';
        }
    };

    const encodeAES = (str, key) => CryptoJS.AES.encrypt(str, key).toString();
    const decodeAES = (str, key) => {
        try {
            const bytes = CryptoJS.AES.decrypt(str, key);
            return bytes.toString(CryptoJS.enc.Utf8);
        } catch (e) {
            return 'Invalid encoded string or key';
        }
    };

    const handleEncodeBase64 = () => setOutput(encodeBase64(input));
    const handleDecodeBase64 = () => setOutput(decodeBase64(input));
    const handleEncodeAES = () => setOutput(encodeAES(input, key));
    const handleDecodeAES = () => setOutput(decodeAES(input, key));





    return (
        <div className="container mt-5">
            <h1 className="mb-4">Encoder/Decoder</h1>
            <Tabs defaultActiveKey="base64" id="encoder-decoder-tabs" className="mb-3">
                {/* Base64 Tab */}
                <Tab eventKey="base64" title="Base64">
                    <div className="mb-3">
                        <Form.Control
                            as="textarea"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter text here"
                            rows={3}
                        />
                    </div>
                    <div className="mb-3">
                        <Button className="me-2" onClick={handleEncodeBase64}>Encode Base64</Button>
                        <Button className="me-2" onClick={handleDecodeBase64}>Decode Base64</Button>
                    </div>
                    <h2 className="mb-3">Output</h2>
                    <div className="mb-3">
                        <Form.Control
                            as="textarea"
                            value={output}
                            readOnly
                            placeholder="Output will be shown here"
                            rows={3}
                        />
                    </div>
                </Tab>

                {/* AES Tab */}
                <Tab eventKey="aes" title="AES">
                    <div className="mb-3">
                        <Form.Control
                            as="textarea"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter text here"
                            rows={3}
                        />
                    </div>
                    <div className="mb-3">
                        <Form.Control
                            type="text"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder="Enter key for AES"
                        />
                    </div>
                    <div className="mb-3">
                        <Button className="me-2" onClick={handleEncodeAES}>Encode AES</Button>
                        <Button className="me-2" onClick={handleDecodeAES}>Decode AES</Button>
                    </div>
                    <h2 className="mb-3">Output</h2>
                    <div className="mb-3">
                        <Form.Control
                            as="textarea"
                            value={output}
                            readOnly
                            placeholder="Output will be shown here"
                            rows={3}
                        />
                    </div>
                </Tab>

                {/* Swagger UI Tab */}

            </Tabs>
        </div>
    );
}

export default EncoderDecoder;
