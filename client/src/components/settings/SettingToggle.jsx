function SettingToggle({ title, checked, onChange }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">

      <div>
        <h3 className="text-gray-800 font-medium">
          {title}
        </h3>
      </div>

      <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 ${
          checked
            ? "bg-blue-600"
            : "bg-gray-300"
        }`}
      >

        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-300 ${
            checked
              ? "translate-x-7"
              : "translate-x-0.5"
          }`}
        />

      </button>

    </div>
  );
}

export default SettingToggle;