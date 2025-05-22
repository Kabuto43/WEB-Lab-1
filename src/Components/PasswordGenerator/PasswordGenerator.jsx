import './PasswordGenerator.css';
import React, { useState } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  function generatePassword() {
    let charset = '';
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*';

    if (!charset) return;

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  }

  function copyPassword() {
    if (password) {
      navigator.clipboard.writeText(password);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1000);
    }
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <div className='password-field'>
        <span className='password-text'>{password}</span>
        <button className='btn icon-btn' onClick={copyPassword} title='Copy'>
          📋
        </button>
      </div>

      <div className={`modal ${showModal ? 'show' : ''}`}>
        <div className='modal-content'>Password copied!</div>
      </div>

      <div className='options'>
        <div className='option'>
          <label>Password Length</label>
          <input type='number' min='4' max='20' value={length} onChange={(e) => setLength(Number(e.target.value))} />
        </div>
        <div className='option'><label>A-Z</label><input type='checkbox' checked={useUppercase} onChange={(e) => setUseUppercase(e.target.checked)} /></div>
        <div className='option'><label>a-z</label><input type='checkbox' checked={useLowercase} onChange={(e) => setUseLowercase(e.target.checked)} /></div>
        <div className='option'><label>0-9</label><input type='checkbox' checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} /></div>
        <div className='option'><label>!@#$%</label><input type='checkbox' checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} /></div>
      </div>

      <button className='btn generate-btn' onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
