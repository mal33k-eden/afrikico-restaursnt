const FlashMessage = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 flex items-center space-x-4"
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-100 focus:outline-none text-xl font-bold"
      >
        &times;
      </button>
    </motion.div>
  );
};

export default FlashMessage;
