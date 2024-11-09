'''from django.db import models


# Create your models here.
class UploadFile(models.Model):
    file = models.FileField(blank = True, null = True)
'''
from django.db import models

from django.db import models

class UploadFile(models.Model):
    file = models.FileField(upload_to='uploads/', blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"File {self.id} - {self.file.name}"
    
