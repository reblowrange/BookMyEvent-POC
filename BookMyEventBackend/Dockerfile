FROM adoptopenjdk/openjdk11:alpine-jre
RUN mkdir /opt/app
WORKDIR /opt/app
COPY ./target/book-my-event-0.0.1-SNAPSHOT.jar book-my-event.jar
ENTRYPOINT ["java", "-jar", "./book-my-event.jar"]