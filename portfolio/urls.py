from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('presentation/', views.presentation, name='presentation'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
handler404 = 'portfolio.views.custom_404'
