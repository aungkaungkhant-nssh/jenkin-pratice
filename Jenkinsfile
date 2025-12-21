df gv

pipeline {
    agent any
    parameters{
        choice(name:'Version',choices:['1.1.0','1.2.0','1.3.0'],description:'')
        booleanParam(name:'executeTests',defaultValue:true,description:'')
    }
    stages {
        stage('init'){
            steps {
                script{
                    gv = load 'script.groovy'
                }
            }
        }
        stage('build') {
            steps {
                gb.buildApp()
            }
        }
        stage('test') {
            when{
                expression{
                    params.executeTests
                }
            }
            steps {
                gb.testApp()
            }
        }
       stage('deploy') {
            steps {
                gv.deployApp(params.Version)
            }
        }
    }
}
