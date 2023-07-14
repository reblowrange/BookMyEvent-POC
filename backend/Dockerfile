FROM adoptopenjdk/openjdk11:alpine-jre
RUN mkdir /opt/app
WORKDIR /opt/app
COPY ./target/book-my-event-1.0.0.war book-my-event.war
ENTRYPOINT ["java", "-jar", "./book-my-event.war"]