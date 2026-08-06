function NotificationDropdown({ notifications }) {

    return (

        <div
            className="absolute right-0 mt-2 w-96
            bg-slate-800 rounded-xl shadow-xl p-4 z-50"
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

                    notifications.map(notification => (

                        <div
                            key={notification.id}
                            className="border-b border-slate-700 py-3"
                        >

                            <p>

                                {notification.message}

                            </p>

                            <p className="text-sm text-gray-400">

                                {notification.type}

                            </p>

                        </div>

                    ))

            }

        </div>

    );

}

export default NotificationDropdown;