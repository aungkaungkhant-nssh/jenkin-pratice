@Library('jenkins-shared-library') _

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                buildImage()
            }
        }

        stage('Test') {
            steps {
               testImage()
            }
        }
    }
}
