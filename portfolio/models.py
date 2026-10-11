from django.db import models


class Video(models.Model):
    caption = models.CharField(max_length=200)
    video = models.FileField(upload_to='videos/%y')

    def __str__(self):
        return self.caption
