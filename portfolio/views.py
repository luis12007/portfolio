from django.shortcuts import render, HttpResponse
from .models import TodoItem
from .models import Video
# Create your views here.
def home(request):
    return render(request, 'home.html')

def presentation(request):
    video=Video.objects.all()
    return render(request, 'video.html', {'video':video})

def custom_404(request, exception):
    return render(request, '404.html', status=404)
