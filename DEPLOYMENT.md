# 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your futuristic CV portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your website files ready

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio`, `cv-website`, or `your-username.github.io`)
5. Make sure it's set to **Public**
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Initialize Git and Push Your Code

Open your terminal/command prompt and navigate to your project folder, then run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Futuristic CV portfolio website"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow will automatically run

## Step 4: Access Your Website

After the deployment completes (usually takes 2-3 minutes):

- Your website will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`
- If you named your repository `YOUR_USERNAME.github.io`, it will be at: `https://YOUR_USERNAME.github.io`

## Step 5: Customize Your Portfolio

### Update Personal Information

Edit `index.html` and replace placeholder content:

1. **Hero Section** (lines 35-45):
   ```html
   <span class="title-line highlight">Your Name</span>
   <span class="title-line">Full Stack Developer</span>
   ```

2. **About Section** (lines 85-95):
   - Update the text blocks with your information
   - Modify the statistics numbers

3. **Contact Section** (lines 250-260):
   ```html
   <p>your.email@example.com</p>
   <p>+1 (555) 123-4567</p>
   <p>City, Country</p>
   ```

4. **Social Links** (throughout the file):
   ```html
   <a href="https://github.com/yourusername" class="social-link">
   <a href="https://linkedin.com/in/yourusername" class="social-link">
   <a href="https://twitter.com/yourusername" class="social-link">
   ```

### Add Your Projects

Replace the example projects in the Projects section with your actual work:

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-overlay">
            <div class="project-links">
                <a href="https://your-live-demo.com" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="https://github.com/yourusername/project" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
        <!-- Add your project image here -->
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project and its key features.</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
    </div>
</div>
```

### Update Skills

Modify the skills section to reflect your expertise:

```html
<div class="skill-item">
    <div class="skill-icon"><i class="fab fa-react"></i></div>
    <span>React</span>
    <div class="skill-level" data-level="90"></div> <!-- Adjust level 0-100 -->
</div>
```

## Step 6: Making Updates

After making changes to your website:

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Update: Add new project and skills"

# Push to GitHub
git push origin main
```

The GitHub Actions workflow will automatically redeploy your site!

## 🎨 Customization Options

### Change Color Scheme

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #00ff88;      /* Main neon green */
    --secondary: #0088ff;    /* Blue accent */
    --accent: #ff0088;       /* Pink accent */
    /* Change these to your preferred colors */
}
```

### Add Your Profile Picture

Replace the placeholder avatar in the About section:

```html
<div class="profile-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" />
</div>
```

### Add Project Images

Add images to your project cards:

```html
<div class="project-image">
    <img src="path/to/project-screenshot.jpg" alt="Project Name" />
    <!-- ... overlay content ... -->
</div>
```

## 📱 Testing

Test your website on different devices:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Tablet devices

## 🐛 Troubleshooting

### Common Issues:

1. **Site not loading**: Check if GitHub Pages is enabled in repository settings
2. **CSS/JS not working**: Ensure file paths are correct (case-sensitive)
3. **Images not showing**: Verify image paths and that images are committed to repository
4. **Custom domain**: Add a `CNAME` file with your domain name

### Getting Help:

- Check the Actions tab in your GitHub repository for deployment logs
- Ensure all files are committed and pushed to the main branch
- Verify that the repository is public

## 🎉 Congratulations!

Your futuristic CV portfolio is now live on GitHub Pages! Share the link with potential employers, clients, or anyone you want to impress with your skills.

Remember to keep your portfolio updated with new projects and skills as you grow in your career.

---

**Happy coding!** 🚀✨
