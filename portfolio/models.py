from django.db import models

# Create your models here.

class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

class Video(models.Model):
    caption = models.CharField(max_length=200)
    video = models.FileField(upload_to='videos/%y')
    def __str__(self):
        return self.caption