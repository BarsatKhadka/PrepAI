from django import forms
from .models import UploadFile
class PDFUploadForm(forms.ModelForm):
    class Meta:
        model = UploadFile
        fields = ['file']
