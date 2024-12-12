const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.use(express.json());

app.post('/api/generate-qr', async (req, res) => {
    const { data } = req.body; // e.g., { data: "Unique ID or URL" }

    try {
        const qrCode = await QRCode.toDataURL(data);
        res.json({ qrCode });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating QR code');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));