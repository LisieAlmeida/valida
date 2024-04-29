import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator({ value }) {
  return (
    <div>
      <QRCode value={`https://http://127.0.0.1:8000/certificate/${value}`} />
    </div>
  );
}

export default QRCodeGenerator;
