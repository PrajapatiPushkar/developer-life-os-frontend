import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NotificationBell from "../components/notification/NotificationBell";

import NotificationDropdown from "../components/notification/NotificationDropdown";

import { getUnreadNotifications } from "../services/notificationService";

function MainLayout({ children }) {
  const [notifications, setNotifications] = useState([]);

  const [showNotifications, setShowNotifications] = useState(false);

  const loadNotifications = async () => {
    try {
      const response = await getUnreadNotifications();

      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

 return (

    <div className="bg-slate-950 min-h-screen">

        <Navbar />

        <div className="relative flex justify-end px-8 py-4">

            <NotificationBell
                unreadCount={notifications.length}
                onClick={() =>
                    setShowNotifications(!showNotifications)
                }
            />

            {

                showNotifications && (

                    <NotificationDropdown
                        notifications={notifications}
                    />

                )

            }

        </div>

        <div className="flex">

            <Sidebar />

            <main className="flex-1 p-8 text-white">

                {children}

            </main>

        </div>

    </div>

);
}

export default MainLayout;
