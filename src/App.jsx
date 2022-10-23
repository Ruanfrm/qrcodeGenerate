import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode';
import { useState } from 'react'
import './App.css'

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(Link_url) {
    QRCodeLink.toDataURL(Link_url,{
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url);
    })
  }



  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);

  }


  
  return (
    <div className="Container" >
     <h1>Gerador de QR Code</h1>

    <QRCode
    value={link}
    />

     
     <input 
     value={link}
     onChange={ (e) => handleQrcode(e) }
     className='input'
     type="text"
     placeholder="Digite sua Url:"
     />

    <a href={qrcodeLink} download={`qrcode.png`} >Baixar Qr Code</a>

     </div>
  )
}

export default App
