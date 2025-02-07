pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'front-main', url: 'git@github.com:K-youngHoon/ecommerce_portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'corepack enable'
                    sh 'pnpm install'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'pnpm build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 restart ecosystem.config.js'
            }
        }
    }
}
