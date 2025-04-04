from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class StartupApplication(models.Model):
    CATEGORY_CHOICES = [
        ('ayurveda', 'Ayurveda'),
        ('yoga', 'Yoga & Naturopathy'),
        ('unani', 'Unani'),
        ('siddha', 'Siddha'),
        ('homeopathy', 'Homoeopathy'),
    ]
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    startup_name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    founder_name = models.CharField(max_length=100)
    description = models.TextField()
    document = models.FileField(upload_to='documents/')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.startup_name