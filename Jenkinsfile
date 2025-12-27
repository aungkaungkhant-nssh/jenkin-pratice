@Library('jenkins-shared-library') _

pipeline {
    agent any

    stages {
        stage('Build and push image') {
            steps {
                buildImage "aungkaungkhant107/docker-test:v1.0.3"
                dockerLogin()
                dockerPush "aungkaungkhant107/docker-test:v1.0.3"
            }
        }
    }
}
