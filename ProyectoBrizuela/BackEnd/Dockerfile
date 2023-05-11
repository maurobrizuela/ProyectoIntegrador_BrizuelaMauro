FROM amazoncorretto: 11-alpine-jdk 
MAINTAINER MNB
COPY target/mnb-0.0.1-SNAPSHOT.jar mnb-app.jar
ENTRYPOINT ["java","-jar","/mnb-app.jar"]