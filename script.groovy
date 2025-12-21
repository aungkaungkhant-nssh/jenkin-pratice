def buildApp(){
    echo 'building the application.....'
}

def testApp(){
    echo 'testing the application.....'
}

def deployApp(env,version){
    echo 'deploying the application....'
    echo "${env} deploying the version ${version}"
}

return this