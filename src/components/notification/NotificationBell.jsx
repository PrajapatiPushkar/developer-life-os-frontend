import { Bell } from "lucide-react";

function NotificationBell({ unreadCount, onClick }) {

    return (

        <button
            onClick={onClick}
            className="relative p-2 rounded-lg hover:bg-slate-700"
        >

            <Bell size={24} />

            {

                unreadCount > 0 && (

                    <span
                        className="absolute -top-1 -right-1 bg-red-500 text-white
                        text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >

                        {unreadCount}

                    </span>

                )

            }

        </button>

    );

}

export default NotificationBell;