@Library('jenkins-shared-library') _

pipeline {
    agent any

    environment {
        DOCKER_REPO = "aungkaungkhant107/docker-test"
    }

    stages {
        stage('Build and Push Image') {
            steps {
                script {
                    def version = readNodeVersion()
                    def imageVersion = "${DOCKER_REPO}:${version}"
                    def imageLatest = "${DOCKER_REPO}:latest"

                    echo "Building version: ${version}"

                    buildImage(imageVersion)
                    buildImage(imageLatest)

                    dockerLogin()

                    dockerPush(imageVersion)
                    dockerPush(imageLatest)
                }
            }
        }
    }
}
