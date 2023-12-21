function openTab(event, tabId) {
  // Hide all tab content
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove the "active" class from all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show the clicked tab content and mark the tab as active
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add("active");
}
