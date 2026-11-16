from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('presentation/', views.presentation, name='presentation'),
    path('about/', views.about, name='about'),
    path('api/chat/', views.chat, name='chat'),
]
