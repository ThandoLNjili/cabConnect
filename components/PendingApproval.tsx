import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Clock } from 'lucide-react';

interface PendingApprovalProps {
  onLogout: () => void;
}

const PendingApproval: React.FC<PendingApprovalProps> = ({ onLogout }) => {
  const handleLogout = async () => {
    await signOut(auth);
    onLogout();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-100 rounded-full p-4">
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <h1 className="text-xl font-semibold mb-2">Awaiting Approval</h1>
        <p className="text-gray-500 text-sm mb-6">
          Your driver account has been created and is pending review by an admin.
          You'll be able to log in once your account is approved.
        </p>
        <div className="rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 text-sm mb-6">
          If you believe this is taking too long, please contact support.
        </div>
        <button
          onClick={handleLogout}
          className="w-full rounded-xl border border-gray-200 py-2 font-medium text-gray-700 hover:bg-gray-50"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default PendingApproval;
