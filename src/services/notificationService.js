import API from "./api";

const BASE_URL = "/api/notifications";

// Get All Notifications
export const getNotifications = () =>
  API.get(BASE_URL);

// Get Unread Notifications
export const getUnreadNotifications = () =>
  API.get(`${BASE_URL}/unread`);

// Mark Notification As Read
export const markAsRead = (id) =>
  API.put(`${BASE_URL}/${id}/read`);

// Delete Notification
export const deleteNotification = (id) =>
  API.delete(`${BASE_URL}/${id}`);

export default API;