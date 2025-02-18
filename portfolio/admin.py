from django.contrib import admin
from .models import TodoItem
# Register your models here.
from .models import Video
admin.site.register(TodoItem)
admin.site.register(Video)