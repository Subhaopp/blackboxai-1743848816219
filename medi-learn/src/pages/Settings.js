import React, { useState } from 'react';
import { FaUser, FaBell, FaLock, FaPalette } from 'react-icons/fa';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    reminders: true
  });
  const [theme, setTheme] = useState('light');

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Account Settings</h2>
        <p className="text-gray-600">Manage your account preferences and notification settings.</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <FaUser className="text-blue-600 text-2xl mr-3" />
          <h3 className="text-xl font-bold">Profile Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue="Doe"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue="john.doe@example.com"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <FaBell className="text-blue-600 text-2xl mr-3" />
          <h3 className="text-xl font-bold">Notification Preferences</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(notifications).map(([type, enabled]) => (
            <div key={type} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium capitalize">{type} Notifications</h4>
                <p className="text-sm text-gray-500">
                  {type === 'email' && "Receive notifications via email"}
                  {type === 'push' && "Receive push notifications on your device"}
                  {type === 'reminders' && "Get reminders about upcoming modules"}
                </p>
              </div>
              <button
                onClick={() => handleNotificationChange(type)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Theme */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <FaPalette className="text-blue-600 text-2xl mr-3" />
          <h3 className="text-xl font-bold">Theme Preferences</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {['light', 'dark', 'system'].map((themeOption) => (
            <button
              key={themeOption}
              onClick={() => setTheme(themeOption)}
              className={`p-4 border rounded-lg text-center capitalize ${theme === themeOption ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}
            >
              {themeOption}
            </button>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <FaLock className="text-blue-600 text-2xl mr-3" />
          <h3 className="text-xl font-bold">Security</h3>
        </div>
        <div className="space-y-4">
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Change Password
          </button>
          <button className="w-full md:w-auto bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-6 rounded-lg transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
