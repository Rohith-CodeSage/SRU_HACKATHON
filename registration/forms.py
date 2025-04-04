from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import StartupApplication

class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
    
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("This email is already registered.")
        return email

class StartupApplicationForm(forms.ModelForm):
    class Meta:
        model = StartupApplication
        fields = ['startup_name', 'category', 'founder_name', 'description', 'document']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 4}),
        }
    
    def clean_document(self):
        document = self.cleaned_data.get('document')
        if document:
            if document.size > 5*1024*1024:  # 5MB limit
                raise forms.ValidationError("File size must be under 5MB")
            if not document.name.endswith('.pdf'):
                raise forms.ValidationError("Only PDF files are allowed")
        return document