import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface PinPadProps {
  onSuccess: () => void;
  correctPin: string;
  onCancel: () => void;
}

const PinPad: React.FC<PinPadProps> = ({ onSuccess, correctPin, onCancel }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      setError(false);
      
      if (newPin.length === 4) {
        if (newPin === correctPin) {
          onSuccess();
        } else {
          setError(true);
          setTimeout(() => setPin(''), 500);
        }
      }
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Driver Access</h2>
          <p className="text-sm text-gray-500 mt-1">Enter your 4-digit PIN</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                i < pin.length 
                  ? error ? 'bg-red-500' : 'bg-blue-600'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-16 rounded-xl bg-gray-50 text-2xl font-semibold text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none"
            >
              {num}
            </button>
          ))}
          <button
             onClick={onCancel}
             className="h-16 rounded-xl bg-red-50 text-sm font-medium text-red-600 hover:bg-red-100 active:bg-red-200 transition-colors focus:outline-none flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            onClick={() => handleNumberClick('0')}
            className="h-16 rounded-xl bg-gray-50 text-2xl font-semibold text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="h-16 rounded-xl bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none flex items-center justify-center"
          >
            Del
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinPad;
