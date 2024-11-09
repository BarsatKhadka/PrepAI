'''from django.urls import path
from . import views

urlpatterns = [
    path("", views.index,name = 'index'),
    path("quiz_generator", views.quiz_generator,name="generate_quiz")
]'''

from django.urls import path
from .views import UploadFileView, GenerateQuizView

urlpatterns = [
    path("upload-file/", UploadFileView.as_view(), name="upload_file"),
    path("generate-quiz/", GenerateQuizView.as_view(), name="generate_quiz"),
]