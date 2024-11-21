// import React from "react";
import { settingsContent } from "../../services/SettingsContent";

const Settings = () => {
  

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
        <p className="text-gray-600 mb-8">
          Customize and manage your preferences for a better experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {settingsContent.map((setting, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{setting.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {setting.title}
                </h2>
              </div>
              <p className="mt-3 text-gray-600">{setting.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
