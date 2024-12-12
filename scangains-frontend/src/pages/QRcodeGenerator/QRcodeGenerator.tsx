import React, { useState } from 'react';
import axios from './../../utils/apiClient';

const QRCodeGenerator: React.FC = () => {
    const [inputData, setInputData] = useState('');
    const [qrCode, setQRCode] = useState('');

    const generateQRCode = async () => {
        try {
            const response = await axios.post('/api/generate-qr', { data: inputData });
            setQRCode(response.data.qrCode);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Generate QR Code</h1>
            <input
                type="text"
                placeholder="Enter data for QR code"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className="border p-2 mb-4 w-full"
            />
            <button
                onClick={generateQRCode}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Generate QR Code
            </button>
            {qrCode && (
                <div className="mt-4">
                    <img src={qrCode} alt="Generated QR Code" />
                </div>
            )}
        </div>
    );
};

export default QRCodeGenerator;