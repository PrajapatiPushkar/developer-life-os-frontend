import {
  markAsRead,
  deleteNotification,
} from "../../services/notificationService";

function NotificationDropdown({ notifications }) {

  const handleRead = async (id) => {

    try {

      await markAsRead(id);

      window.location.reload();

    } catch (error) {

      console.error(error);

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteNotification(id);

      window.location.reload();

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div
      className="absolute right-0 mt-2 w-96 bg-slate-800 rounded-xl shadow-xl p-4 z-50"
    >

      <h2 className="text-xl font-bold mb-4">

        Notifications

      </h2>

      {

        notifications.length === 0 ?

          (

            <p className="text-gray-400">

              No Notifications

            </p>

          )

          :

          notifications.map((notification) => (

            <div
              key={notification.id}
              className="border-b border-slate-700 py-4"
            >

              <p className="font-semibold">

                {notification.message}

              </p>

              <p className="text-sm text-gray-400 mt-1">

                {notification.type}

              </p>

              <div className="flex gap-3 mt-3">

                <button
                  onClick={() => handleRead(notification.id)}
                  className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg text-white text-sm"
                >
                  Mark Read
                </button>

                <button
                  onClick={() => handleDelete(notification.id)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-white text-sm"
                >
                  Delete
                </button>

              </div>

            </div>

          ))

      }

    </div>

  );

}

export default NotificationDropdown;