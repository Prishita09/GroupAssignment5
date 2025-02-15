# GroupAssignment5
# Blood Bank Management System

A web application for managing blood donor registration and authentication, built using HTML, CSS, and Bootstrap.


## Purpose
This system provides a platform for:
- Blood donor registration and authentication
- Secure login/signup functionality
- Future expansion to blood inventory management
- Potential integration with hospital systems for blood requests
- Donor eligibility checking and appointment scheduling

## Features
- Responsive design
- Login/Signup interface
- Form validation
- Clean user interface
- Bootstrap-powered components

## Bootstrap Components Used
1. **Navbar**
   - `navbar`
   - `navbar-dark`
   - `bg-danger`
   - `container`

2. **Card**
   - `card`
   - `card-body`
   - `card shadow`
   - `card-title`

3. **Form Controls**
   - `form-control`
   - `form-label`
   - Input validation classes

4. **Buttons**
   - `btn`
   - `btn-danger`
   - `btn-block` (via `w-100`)

5. **Grid System**
   - `container`
   - `row`
   - `col-md-6`
   - `justify-content-center`

6. **Utilities**
   - `mt-5` (margin-top)
   - `mb-3` (margin-bottom)
   - `text-center`
   - `shadow`
   - `mx-auto`

  
# Usage
#Access the login page

#Existing users can login with credentials

#New users can click "Create Account" to register

#Responsive design works on all device sizes


### Instructions:

1. Copy the above content into a file named `README.md`.
2. Replace the placeholders (e.g., `Navbar`, `Hello, world!`) with your own content.
3. Ensure the Bootstrap CSS and JS files are correctly linked in your HTML file.
4. Open the HTML file in a browser to see the components in action.

Let me know if you need further assistance!

# Bootstrap Integration Guide

This guide provides a step-by-step explanation of how to integrate Bootstrap components into your project. It assumes you have basic knowledge of HTML, CSS, and JavaScript.

## Prerequisites

Before you begin, ensure you have the following:

- A basic understanding of HTML, CSS, and JavaScript.
- A text editor or IDE for writing code.
- Access to the internet (for using Bootstrap via CDN).

## Getting Started

1. **Include Bootstrap in Your Project:**

   To use Bootstrap, you need to include its CSS and JavaScript files in your project. You can do this by adding the following lines to the `<head>` and end of the `<body>` sections of your HTML file:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Project Title</title>
       <!-- Bootstrap CSS -->
       <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
   </head>
   <body>
       <!-- Your content goes here -->

       <!-- Bootstrap JS and dependencies -->
       <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
   </body>
   </html>
#nav bar
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
    </div>
</nav>
#alert bootstrap
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
#jumbotron boot strap
<div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>