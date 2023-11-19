
# Frontend Development Checklist for ThesisApplication

This checklist outlines the tasks and features to be implemented or refactored in the frontend of the ThesisApplication. Use this checklist to track progress and ensure all necessary components and functionalities are addressed.

## General Development Tasks
- [ ] Refactor routes to use sub-routes under a default layout.
- [ ] Update the Navbar to render elements based on user status.
- [ ] Implement DefaultLayoutPage to include the Navbar.
- [ ] Implement some elements to put inside the LandingPage.

## Specific Tasks

### Refactoring Routes
- [ ] Update the `<Route>` structure to nest other routes within the `DefaultLayoutPage`. Example:

  ```javascript
  <Route path={routes.landingPage} element={<DefaultLayoutPage/>}>
    // ...other routes with corresponding pages
  </Route>
  ```

### Dynamic Loading and Skeletons
- [ ] Implement Dynamic loading of imports --> LazyLoading and effects to it. Like Skeleton objects for the waiting during theloading
- [ ] Implement Dynamic Loading --> lazyloading will permit to load the page only when the contents are all in it


### Update Navbar
- [ ] Modify Navbar component to dynamically render based on user status (logged in, logged out, user role, etc.).

### Implement DefaultLayoutPage
- [ ] Create `DefaultLayoutPage` component.
- [ ] Ensure `DefaultLayoutPage` includes the Navbar and appropriate styling.

---

This checklist can be updated and expanded as the project evolves. Mark each item as completed to keep track of the development progress.