document.addEventListener('DOMContentLoaded', function() {
  try {
    // Check if projects data is available
    if (!window.projects) {
      throw new Error('Projects data not found globally');
    }

    // Get the projects container
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) {
      console.log('No projects container found on this page');
      return;
    }

    // Get the project card template
    const projectCardTemplate = document.getElementById('project-card-template').innerHTML;

    // Populate the projects container
    projectsContainer.innerHTML = window.projects.map(project => {
      return Mustache.render(projectCardTemplate, {
        id: project.id,
        thumbnail: project.thumbnail,
        title: project.title,
        category: project.category,
        description: project.description
      });
    }).join('');

    // Add click handlers for project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project-id');
        window.location.href = `project-template.html?id=${projectId}`;
      });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
          name: this.querySelector('[name="name"]').value,
          email: this.querySelector('[name="email"]').value,
          message: this.querySelector('[name="message"]').value
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
          alert('Please fill in all fields');
          return;
        }

        // Log the form data (in a real application, you would send this to a server)
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset the form
        this.reset();
      });
    }
  } catch (error) {
    console.error('Error loading projects:', error);
  }
});

