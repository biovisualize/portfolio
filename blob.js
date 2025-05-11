class Blob {
  constructor(x, y, radius, isCursorFollower = false) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.isCursorFollower = isCursorFollower;
    const speed = 1; // Lower number = slower movement
    this.vx = (Math.random() - 0.5) * speed;
    this.vy = (Math.random() - 0.5) * speed;
    this.element = this.createBlob();
  }

  createBlob() {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", this.x);
    circle.setAttribute("cy", this.y);
    circle.setAttribute("r", this.radius);
    circle.setAttribute("fill", "rgb(255, 180, 100)");
    return circle;
  }

  update(mouseX = null, mouseY = null) {
    if (this.isCursorFollower && mouseX !== null && mouseY !== null) {
      // Smoothly follow cursor
      this.x += (mouseX - this.x) * 0.1;
      this.y += (mouseY - this.y) * 0.1;
    } else {
      // Regular movement
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls
      if (this.x < this.radius || this.x > window.innerWidth - this.radius) {
        this.vx *= -1;
      }
      if (this.y < this.radius || this.y > window.innerHeight - this.radius) {
        this.vy *= -1;
      }
    }

    // Update position
    this.element.setAttribute("cx", this.x);
    this.element.setAttribute("cy", this.y);
  }

  reposition() {
    // Keep blob within bounds if window is resized
    this.x = Math.min(Math.max(this.x, this.radius), window.innerWidth - this.radius);
    this.y = Math.min(Math.max(this.y, this.radius), window.innerHeight - this.radius);
    this.element.setAttribute("cx", this.x);
    this.element.setAttribute("cy", this.y);
  }
}

class BlobAnimation {
  constructor() {
    this.container = document.getElementById('blob-container');
    this.blobs = [];
    this.opacity = 1; // Control overall opacity here (0-1)
    this.mouseX = null;
    this.mouseY = null;
    this.setupContainer();
    this.setupResizeHandler();
    this.setupMouseMoveHandler();
    this.createBlobs();
    this.animate();
  }

  setupContainer() {
    // Ensure SVG container fills the viewport
    this.container.setAttribute('width', window.innerWidth);
    this.container.setAttribute('height', window.innerHeight);
    
    // Update filter with current opacity
    const filter = this.container.querySelector('#blob-filter');
    if (filter) {
      const feColorMatrix = filter.querySelector('feColorMatrix');
      if (feColorMatrix) {
        feColorMatrix.setAttribute('values', `1 0 0 0 0
                                             0 1 0 0 0 
                                             0 0 1 0 0 
                                             0 0 0 ${40 * this.opacity} -${20 * this.opacity}`);
      }
    }
  }

  setupMouseMoveHandler() {
    document.addEventListener('mousemove', (e) => {
      // Get the SVG's position and dimensions
      const svgRect = this.container.getBoundingClientRect();
      const profileContainer = document.querySelector('.profile-container');
      const profileRect = profileContainer.getBoundingClientRect();
      const viewBox = this.container.viewBox.baseVal;
      
      // Calculate the scale factors
      const scaleX = viewBox.width / svgRect.width;
      
      // Calculate position relative to the SVG
      const relativeX = e.clientX - svgRect.left;
      const relativeY = e.clientY + profileRect.top;
      
      // Map to viewBox coordinates
      this.mouseX = relativeX * scaleX;
      this.mouseY = relativeY;
      
      // Ensure the blob stays within the SVG bounds
      this.mouseX = Math.max(0, Math.min(viewBox.width, this.mouseX));
      this.mouseY = Math.max(0, Math.min(viewBox.height, this.mouseY));
    });
  }

  createBlobs() {
    const colors = [
      "rgb(255, 180, 100)",
      "rgb(255, 120, 0)",
      "rgb(255, 100, 0)",
      "rgb(255, 80, 0)",
      "rgb(255, 180, 80)",
      "rgb(255, 120, 40)",
      "rgb(255, 100, 40)",
      "rgb(255, 80, 40)"
    ];

    const numBlobs = 8;
    const blobBaseRadius = 100;
    
    for (let i = 0; i < numBlobs; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      // Set cursor-following blob to 60px radius, others remain random
      const radius = i === 0 ? 60 : blobBaseRadius + Math.random() * blobBaseRadius;
      const isCursorFollower = i === 0;
      const blob = new Blob(x, y, radius, isCursorFollower);
      blob.element.setAttribute("fill", colors[i % colors.length]);
      this.blobs.push(blob);
      this.container.appendChild(blob.element);
    }
  }

  setupResizeHandler() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.setupContainer();
        this.blobs.forEach(blob => blob.reposition());
      }, 250);
    });
  }

  animate() {
    this.blobs.forEach(blob => blob.update(this.mouseX, this.mouseY));
    requestAnimationFrame(() => this.animate());
  }
}

// Wait for window to be fully loaded before starting animation
window.addEventListener('load', () => {
  new BlobAnimation();
}); 