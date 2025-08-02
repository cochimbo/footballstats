# Simple runtime stage using pre-built JAR
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the pre-built JAR 
COPY target/footballstats-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]