# ReactJS Router Concepts

This folder contains examples and practice exercises for **React Router** (v6) covering various routing scenarios, from basic routing to advanced real-world POCs. React Router allows us to handle navigation, dynamic routes, nested routes, protected routes, layout routes, and query parameters in a React application.

---

## 1. BasicRouter
**Folder/File:** `BasicRouter/BasicRouter.jsx`  

**Concept:**  
- Introduces the basic usage of React Router.
- Implements `BrowserRouter`, `Routes`, `Route`, and `Link`.
- Allows navigation between static pages like Home, About, and Contact.

**Use Case:**  
- Simple multi-page applications.
- Static page navigation without full page reloads.

**Real-world Example:**  
- A company website with multiple informational pages.

---

## 2. NestedRoutes
**Folder/File:** `NestedRoutes/NestedRoutes.jsx`  

**Concept:**  
- Demonstrates nested routing using `Outlet`.
- Allows child routes to render inside a parent route component.

**Use Case:**  
- When a layout or dashboard has multiple sections with their own nested routes.

**Real-world Example:**  
- A user dashboard with tabs such as Profile, Settings, and Notifications.

---

## 3. DynamicRoutes
**Folder/File:** `DynamicRoutes/DynamicRoutes.jsx`  

**Concept:**  
- Implements dynamic URL parameters using `useParams`.
- Enables rendering pages based on route parameters (e.g., `/products/:id`).

**Use Case:**  
- Pages where content changes based on URL parameters.

**Real-world Example:**  
- Product detail pages in an e-commerce app.

---

## 4. ProtectedRoutes
**Folder/File:** `ProtectedRoutes/ProtectedRoutes.jsx`  

**Concept:**  
- Restricts access to certain routes based on authentication status.
- Redirects unauthorized users to a login page using `Navigate`.

**Use Case:**  
- Any secure area in an application that requires login.

**Real-world Example:**  
- Dashboard, user profile pages, or admin panels.

---

## 5. RouteParams
**Folder/File:** `RouteParams/RouteParams.jsx`  

**Concept:**  
- Uses `useParams` to access dynamic route parameters.
- Often used for fetching specific data based on the parameter.

**Use Case:**  
- Detailed view pages, like individual user profiles or product pages.

**Real-world Example:**  
- `/users/:userId` to display a specific user’s profile.

---

## 6. QueryParams
**Folder/File:** `QueryParams/QueryParams.jsx`  

**Concept:**  
- Demonstrates reading URL query parameters using `useSearchParams`.
- Allows filtering or searching content based on query strings.

**Use Case:**  
- Filtering lists or applying search filters without changing routes.

**Real-world Example:**  
- `/products?category=electronics&sort=price` to display filtered product lists.

---

## 7. RedirectRoutes
**Folder/File:** `RedirectRoutes/RedirectRoutes.jsx`  

**Concept:**  
- Handles redirection using `Navigate`.
- Automatically redirects users to another route based on conditions.

**Use Case:**  
- Redirect after login/logout, or redirect unauthorized users.

**Real-world Example:**  
- Redirecting `/login` users to `/dashboard` upon successful login.

---

## 8. LayoutRoutes
**Folder/File:** `LayoutRoutes/LayoutRoutes.jsx`  

**Concept:**  
- Demonstrates using layout components with `Outlet` for nested routes.
- Provides a consistent UI layout for multiple child routes.

**Use Case:**  
- Applications where multiple pages share a common header, sidebar, or footer.

**Real-world Example:**  
- Admin dashboard layout with sidebar navigation and main content area.

---

## 9. AdvancedRouterPOC
**Folder/File:** `AdvancedRouterPOC/AdvancedRouterPOC.jsx`  

**Concept:**  
- Real-world proof of concept combining multiple routing features:
  - Nested routes
  - Dynamic routes
  - Protected routes
  - Layout routes
  - API data fetching integration

**Use Case:**  
- Complex applications requiring authentication, dashboard layouts, product or data-driven pages.

**Real-world Example:**  
- E-commerce admin dashboard where users can log in, view products, and see individual product details.  
- `/dashboard/products` → List of products  
- `/dashboard/products/:id` → Product details page  
- `/dashboard/profile` → User profile  
- `/login` → Login page for authentication  

---

## Summary
React Router allows developers to create robust, dynamic, and scalable routing structures in React applications. With concepts like nested routes, dynamic routing, protected routes, layout routing, and query parameters, you can design real-world applications that are maintainable and intuitive for users.  

**Key Benefits:**
- Navigation without page reload.
- Dynamic routing for personalized content.
- Security with protected routes.
- Reusable layouts for consistent UI.
- Handles URL parameters and queries for flexible applications.

---