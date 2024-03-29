import React from 'react';
import QRCode from 'react-qr-code';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './QrCode.css';

export default function QrCode() {
  const { ScreenTokens} = useContext(AppContext);

  const url = 'https://shopping-payment.vercel.app/payment-' + ScreenTokens.Payment;

  return(
    <section>

      <div className="qrcode-info">
        <span>QrCode</span>
        <p>Aponte a camera do seu celular em direção ao QrCode para Finalizar o Pagamento.</p>
      </div>

      <div className="QrCode-div" >
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={url}
          viewBox={'0 0 256 256'}
        />
      </div>
    </section>
  );
}
