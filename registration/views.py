from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import login
from .forms import UserRegistrationForm, StartupApplicationForm
from .models import StartupApplication

def home_view(request):
    """Home page view with information about the AYUSH portal"""
    return render(request, 'registration.html', {'section': 'home'})

def register_view(request):
    """User registration view"""
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registration successful!')
            return redirect('dashboard')
    else:
        form = UserRegistrationForm()
    
    return render(request, 'registration.html', {'form': form, 'section': 'register'})

@login_required
def dashboard_view(request):
    """User dashboard showing their applications"""
    applications = StartupApplication.objects.filter(user=request.user).order_by('-created_at')
    return render(request, 'registration.html', {
        'applications': applications,
        'section': 'dashboard'
    })

@login_required
def application_view(request):
    """View for submitting new startup applications"""
    if request.method == 'POST':
        form = StartupApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            application = form.save(commit=False)
            application.user = request.user
            application.save()
            messages.success(request, 'Application submitted successfully!')
            return redirect('dashboard')
    else:
        form = StartupApplicationForm()
    
    return render(request, 'registration.html', {
        'form': form,
        'section': 'application'
    })

def faq_view(request):
    """FAQ and support section"""
    return render(request, 'registration.html', {'section': 'faq'})