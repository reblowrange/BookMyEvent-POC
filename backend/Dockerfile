FROM adoptopenjdk/openjdk11:alpine-jre
RUN mkdir /opt/app
WORKDIR /opt/app
COPY ./target/backend-0.1-SNAPSHOT.war book-event.war
ENTRYPOINT ["java", "-jar", "./book-event.war"]