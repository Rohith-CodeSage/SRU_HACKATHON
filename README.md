# AYUSH Startup Registration Portal

## 👥 Team Details

### Team Members

| Name | ID Number |
|------|-----------|
| Rohith | 2303A52198 |
| Rithwik | 2303A52330 |
| Sai Teja | 2303A52325 |
| Rushindhra | 2303A52199 |
| Ganesh | 2303A52356 |

### About Our Team

We are a group of dedicated students collaborating on projects together. Each member brings unique skills and perspectives to the team.

![AYUSH Portal](https://via.placeholder.com/800x400?text=AYUSH+Portal)

A comprehensive web application built on Django to facilitate the registration and management of startups in the AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy) sector. This portal streamlines the application process for entrepreneurs and provides a centralized platform for tracking applications.

## 📋 Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [User Journey](#user-journey)
- [Administration](#administration)
- [Customization](#customization)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Code of Conduct](#code-of-conduct)

## 🎬 Demo
Watch our project demonstration video to see the application in action:

https://github.com/Rohith-CodeSage/SRU_HACKATHON/assets/USERID/ROHITH_2198.mp4

*Note: Replace "USERID" with your actual GitHub user ID number to make the video playable directly in the README*

## ✨ Features
- **User Authentication System**: Secure registration and login functionality for entrepreneurs
- **Startup Application Submission**: Easy-to-use form for submitting new AYUSH startup applications
- **Application Dashboard**: Track the status of submitted applications (Pending, Approved, Rejected)
- **Document Upload**: Support for PDF document uploads with validation
- **Responsive Design**: Mobile-friendly interface that works across devices
- **Category-based Classification**: Organize startups based on different AYUSH categories

## 🛠️ Tech Stack
- **Backend**: Django 5.2
- **Frontend**: HTML, CSS, JavaScript
- **Database**: SQLite (default, configurable)
- **Authentication**: Django's built-in authentication system
- **File Storage**: Local storage for uploaded documents

## 🚀 Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Rohith-CodeSage/SRU_HACKATHON.git
   cd SRU_HACKATHON
   ```

2. Create and activate a virtual environment (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. Install dependencies
   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations
   ```bash
   python manage.py migrate
   ```

5. Create a superuser (for admin access)
   ```bash
   python manage.py createsuperuser
   ```

6. Run the development server
   ```bash
   python manage.py runserver
   ```

7. Access the application at `http://127.0.0.1:8000/`

## 📁 Project Structure

```
ayush_portal/            # Main Django project
├── settings.py          # Project settings
├── urls.py              # Main URL routing
└── wsgi.py              # WSGI configuration

registration/            # Main application
├── models.py            # Data models
├── views.py             # View functions
├── forms.py             # Form definitions
├── urls.py              # URL patterns
└── templates/           # HTML templates
    └── registration.html

static/                  # Static assets
├── css/
│   └── style.css        # Main stylesheet
└── js/
    └── script.js        # Client-side scripts

media/                   # User uploaded files
└── documents/           # Uploaded application documents
```

## 👤 User Journey

1. **Registration**: New users register with username, email, and password
2. **Login**: Registered users log in to access the dashboard
3. **Application Submission**: Users submit startup details and upload documents
4. **Application Tracking**: Users monitor application status on the dashboard
5. **Support**: Access to FAQ and support information

## ⚙️ Administration

Administrators can access the Django admin panel at `/admin` to:
- Review submitted applications
- Change application status (Pending, Approved, Rejected)
- Manage user accounts
- Access uploaded documents

## 🎨 Customization

The portal can be customized in several ways:
- Modify the `settings.py` file to change configuration
- Update templates in the `templates` directory
- Add or modify CSS in `static/css/style.css`
- Extend functionality by adding new views and forms

## 🔒 Security Considerations

- The project uses Django's built-in security features including CSRF protection
- File uploads are validated for type and size
- Authentication is required for sensitive operations
- Production deployment should include proper security measures:
  - Change `DEBUG` to `False`
  - Set a secure `SECRET_KEY`
  - Configure HTTPS
  - Use a production-grade database

### Version Control

Our team uses Git for version control. All code changes are properly committed with descriptive messages.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Project Link: [https://github.com/Rohith-CodeSage/SRU_HACKATHON](https://github.com/Rohith-CodeSage/SRU_HACKATHON)

For inquiries related to our team or projects, please contact any of our team members using their ID numbers.

## 📜 Code of Conduct

We are committed to creating a positive and inclusive work environment. All team members treat each other with respect and professionalism.

---

Made with ❤️ for the AYUSH startup ecosystem
