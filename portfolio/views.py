from django.shortcuts import render, HttpResponse
from .models import TodoItem
# Create your views here.
def home(request):
    return render(request, 'home.html')

def presentation(request):
    return render(request, 'video.html')

def custom_404(request, exception):
    return render(request, '404.html', status=404)
