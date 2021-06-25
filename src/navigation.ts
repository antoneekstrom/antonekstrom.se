export const ID_CONTACT_ME = "kontakt"
export const ID_PROJECTS = "projekt"
export const ID_START_PAGE = "start"

export function showCV() {
  // window.alert("finns inte än :(");
  window.open("/cv.pdf");
}

export function contactMe() {
  document.querySelector("#" + ID_CONTACT_ME).scrollIntoView();
}

export function goToProjects() {
  document.querySelector("#" + ID_PROJECTS).scrollIntoView();
}

export function goToStart() {
  document.querySelector("#" + ID_START_PAGE).scrollIntoView();
}