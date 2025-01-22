
# URLshortener

Built a URL shortener with some advanced features using the MERN stack (MongoDB, Express.js, React.js, Node.js).

Deployed the application online, making it accessible globally.
Here's link: https://url-shortener-frontend-six-rho.vercel.app/

But since the server is running on free plan so it takes while to render. 

## Features

- Optimized URL storage using **LRU replacement** to limit the number of URLs per user and automatically remove older entries to manage storage effectively.
- Added a *Logs* section with **polling** to monitor URL history in real-time, refreshing data periodically for improved user experience.
- Applied polling technique to check server accessibility at start for uninterrupted functionality.
- *Light/dark* mode toggle
- Added popup notification
- Implemented Bcrypt to ensure secure password hashing and storage.
- Utilized JWT (JSON Web Token) for robust user authentication and authorization.

- Enabled full CRUD functionality to manage tasks efficiently.
- Focused on responsive design and backend logic.


## Tech Stack

**Client:** React, Redux, CSS 

**Server:** Node, Express , jwt ,bcrypt js, 

**Database:** MongoDB

## Screenshots
Mobile View Home screen Light mode:

![Image](https://github.com/user-attachments/assets/96761b4a-a527-4fab-a1cb-10495575a6b4)

Desktop view in Light mode:

![Image](https://github.com/user-attachments/assets/a551c4ad-3a85-447a-9fb6-00eab8bdfa99)

Mobile View Home screen Dark mode:

![Image](https://github.com/user-attachments/assets/810c8691-f065-4c09-a176-3d4e0b1910a1)


Toast notification:

![Image](https://github.com/user-attachments/assets/777486c9-a42e-47ce-9cbe-8f3d9fbfeda4)

SignIn/SignUp page:

![Image](https://github.com/user-attachments/assets/a07e9d73-5053-444e-b117-6ccdaf0ed3a6)

Log section with real time updates:

![Image](https://github.com/user-attachments/assets/cfaa39eb-8a78-4338-8bb3-b252c6511abe)

Responsive design:

![Image](https://github.com/user-attachments/assets/c308d58d-6726-4b46-b1d8-80a1935f596f)

Create new url functionality:

![Image](https://github.com/user-attachments/assets/878ea9c9-173a-4aaf-8d45-f776adaed1f0)

