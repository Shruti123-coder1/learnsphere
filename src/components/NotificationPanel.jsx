import { X } from "lucide-react";
import NotificationItem from "./NotificationItem";

const NotificationPanel = ({
  notifications,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/30 md:hidden"
        onClick={onClose}
      ></div>

      {/* Notification Panel */}
      <div
        className="
          absolute
          right-0
          top-14
          z-50
          w-[90vw]
          max-w-sm
          rounded-xl
          border
          border-gray-200
          bg-white
          shadow-xl
          md:w-96
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Notifications
          </h3>

          <button
            onClick={onClose}
            aria-label="Close notifications"
            className="
              rounded-full
              p-2
              transition
              hover:bg-gray-100
              active:scale-95
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
          >
            <span className="sr-only">Close notifications</span>
            <X size={20} />
          </button>
        </div>

        {/* Notification List */}
        <div className="max-h-96 overflow-y-auto overflow-x-hidden p-4 space-y-3">
          {notifications.map((item) => (
            <NotificationItem
              key={item.id}
              notification={item}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <button
            className="
              w-full
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-white
              transition
              hover:bg-blue-700
              active:scale-95
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
          >
            View All Notifications
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;