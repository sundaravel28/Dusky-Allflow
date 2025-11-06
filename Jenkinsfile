pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sundaravel28/Dusky-Allflow.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }

<<<<<<< HEAD:Jenkinsfile

=======
>>>>>>> 1634153 (superadmin report changes):jenkinsfile
        stage('Run SuperAdmin Test') {
            steps {
                bat 'npx playwright test tests/superadmin.spec.ts'
            }
        }
    }
}
