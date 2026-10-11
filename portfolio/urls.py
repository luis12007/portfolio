from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('presentation/', views.presentation, name='presentation'),
    path('api/chat/', views.chat, name='chat'),
]
