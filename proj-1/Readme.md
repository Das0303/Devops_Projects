**Project Documentation Guide**
_______________________________

Project Name : a multi-stage Docker build for a Node.js Express Web Server served behind an Nginx reverse proxy, managed via Docker Compose.

The repository is organized following industry best practices:

<img width="119" height="155" alt="image" src="https://github.com/user-attachments/assets/47a2559c-774c-443e-86ac-b2390af4411d" />





**Prerequisites**
______________________
Before running this project, ensure you have the following installed:

1. Docker (includes Docker Engine and Docker Compose)
2. Node.js & npm (Optional, for local testing only)
3. Git






**Local Application Testing (Host Machine)**
______________________________________________
This step verifies the Node.js application is functional before containerization.

1. Navigate into the application directory:
      cd app
2. Install dependencies:
      npm install
3. Start the application:
      npm start
4. Verify the endpoints using curl or a web browser:
     curl http://localhost:3000/        # Expected: Hello from Docker WebServer!
     curl http://localhost:3000/health  # Expected: OK.

5. Stop the application:
     Ctrl+C






**Containerization and Deployment (Docker Compose)**
_______________________________________________________
The application is deployed using a multi-stage Dockerfile and orchestrated via docker-compose.yml

1. Ensure you are in the project root directory # For me is it proj1
2. Build the images and start the services (web app and Nginx) in detached mode:
     docker compose up --build -d   # The --build flag ensures the Node.js image is rebuilt with the latest code/dependencies.






**Verification and Runtime Inspection**
____________________________________________
The application is now running behind Nginx, typically on port 8080 (or as configured in docker-compose.yml).

1. Verify the Nginx Proxy Endpoint:
      curl http://localhost:8080/
2. Inspect Container Health: Check the specific health status set in the Dockerfile's :
      docker inspect --format='{{json .State.Health}}' webapp   # docker imagename i gave is webapp
3. Monitor Live Resource Usage: Stream resource statistics for running containers:
      docker stats
4. Access the Container Shell for Debugging:
      docker exec -it webapp sh






**Cleanup**
___________________

To stop and remove all running containers and the created network:
      docker compose down

