def gv

pipeline {
    agent any

    parameters {
        choice(name: 'Version', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    }

    stages {
        stage('init') {
            steps {
                script {
                    gv = load 'script.groovy'
                }
            }
        }

        stage('build image') {
            steps {
                script {
                    gv.buildImage()
                }
            }
        }

        stage('test') {
            when {
                expression { params.executeTests }
            }
            steps {
                script {
                    gv.testApp()
                }
            }
        }

        stage('deploy') {
            steps {
                script {
                    def userInput = input(
                        message: 'Select the environment to deploy',
                        ok: 'Done',
                        parameters: [
                                choice(
                                    name: 'env',
                                    choices: ['dev', 'staging', 'prod'],
                                    description: 'Select Environment'
                                )
                            ]
                        )

                    gv.deployApp(userInput, params.Version)
                }
            }
        }
    }
}
