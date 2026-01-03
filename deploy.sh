#!/bin/bash

# 🚀 Script de déploiement automatique GitHub Pages
# Usage: ./deploy.sh "message de commit"

set -e  # Arrêt si erreur

# Couleurs pour output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Déploiement Championnats France Escalade 2026${NC}"
echo ""

# 1. Charger le token depuis le fichier de config
if [ ! -f ".github-token" ]; then
    echo -e "${RED}❌ ERREUR: Fichier .github-token introuvable${NC}"
    echo -e "${YELLOW}👉 Crée le fichier .github-token et ajoute ton token GitHub${NC}"
    exit 1
fi

# Charger les variables
source .github-token

# Vérifier que le token a été configuré
if [ "$GITHUB_TOKEN" = "TON_TOKEN_ICI" ]; then
    echo -e "${RED}❌ ERREUR: Token GitHub non configuré${NC}"
    echo -e "${YELLOW}👉 Édite .github-token et remplace TON_TOKEN_ICI par ton vrai token${NC}"
    exit 1
fi

# 2. Message de commit (paramètre ou défaut)
COMMIT_MSG="${1:-fix: Mise à jour automatique}"

echo -e "${GREEN}✓ Configuration chargée${NC}"
echo -e "  Username: ${GITHUB_USERNAME}"
echo -e "  Repo: ${GITHUB_REPO}"
echo -e "  Commit: ${COMMIT_MSG}"
echo ""

# 3. Build du site
echo -e "${BLUE}📦 Build du site statique...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build échoué${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build réussi${NC}"
echo ""

# 4. Git add
echo -e "${BLUE}📝 Ajout des fichiers modifiés...${NC}"
git add .

# 5. Git commit
echo -e "${BLUE}💾 Création du commit...${NC}"
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠ Rien à commiter ou commit échoué${NC}"
fi

# 6. Git push avec authentification token
echo -e "${BLUE}🚀 Push vers GitHub...${NC}"

# Configure l'URL avec le token pour ce push uniquement
git remote set-url origin "https://${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"

# Push
git push origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Push échoué${NC}"
    # Remettre l'URL sans token
    git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"
    exit 1
fi

# Remettre l'URL sans token pour la sécurité
git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git"

echo ""
echo -e "${GREEN}✅ DÉPLOIEMENT RÉUSSI !${NC}"
echo -e "${BLUE}🌐 Le site sera disponible dans ~2 minutes sur :${NC}"
echo -e "   https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/"
echo ""

# 7. Notification IndexNow
echo -e "${BLUE}📡 Notification IndexNow aux moteurs de recherche...${NC}"
npm run indexnow
echo ""

