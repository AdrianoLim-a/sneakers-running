FROM maven:3.9.6-eclipse-temurin-21 AS build-backend
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build-backend /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]