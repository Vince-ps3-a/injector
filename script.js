function toggleNotification() {
  var notification = document.getElementById("notification");
  if (window.getComputedStyle(notification).display === "none") {
    notification.style.display = "flex";
  } else {
    notification.style.display = "none";
  }
}
