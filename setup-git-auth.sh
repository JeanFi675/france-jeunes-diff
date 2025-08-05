#!/bin/bash

# Charger les variables d'environnement
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
fi

# Vérifier que le token est défini
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GITHUB_TOKEN non défini dans .env.local"
    exit 1
fi

# Configurer git pour utiliser le token
git config --local credential.helper store
git config --local user.email "duheronjp@gmail.com"
git config --local user.name "JeanFi675"

# Créer le fichier de credentials
echo "https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com" > ~/.git-credentials

# Configurer la remote avec authentification
git remote remove origin 2>/dev/null || true
git remote add origin "https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPO}.git"

echo "✅ Configuration Git avec token terminée"
echo "📦 Repository: ${GITHUB_USER}/${GITHUB_REPO}"