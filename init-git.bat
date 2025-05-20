# Git initialization script for GitHub Pages Deployment

# Initialize git repository
git init

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit for GitHub Pages deployment"

# Instructions for the user to run:
echo "Repository initialized! Now run the following commands:"
echo ""
echo "1. Create a repository on GitHub (e.g., spring-engineer-portfolio)"
echo "2. Run these commands (replace YOUR_USERNAME with your GitHub username):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/spring-engineer-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "3. To deploy manually, run:"
echo "   npm run deploy"
echo ""
echo "4. Or wait for GitHub Actions to automatically deploy after pushing to main"
