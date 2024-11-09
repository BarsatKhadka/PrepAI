'''from django.shortcuts import render, redirect
from .forms import PDFUploadForm
from .utils import text_extraction, quizzer
from .models import UploadFile
from django.contrib import messages

# Create your views here.



def index(request):

    return render(request,'index.html')


def quiz_generator(request):
    if request.method == "POST":
        form = PDFUploadForm(request.POST, request.FILES)
        if form.is_valid():

            pdf_file = form.cleaned_data.get('file')
            # Save the PDF temporarily
            obj = form.save(commit=False)
            obj.file = pdf_file
            obj.save()
            
            '''with obj.file.open('wb') as f:
                for chunk in pdf_file.chunks():
                    f.write(chunk)'''
            #extract text and generate quiz
            data = quizzer(obj.file)
            return render(request, "quiz.html", {"data": data})
    else:
        #If not post method used, rendering the form 
        form = PDFUploadForm()
    return render(request, "upload.html", {"form": form})

'''
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .forms import PDFUploadForm
from .utils import quizzer
from .models import UploadFile
from .serializers import UploadFileSerializer

class UploadFileView(APIView):
    def post(self, request):
        form = PDFUploadForm(request.POST, request.FILES)
        if form.is_valid():
            pdf_file = form.cleaned_data.get('file')
            obj = form.save()
            serializer = UploadFileSerializer(obj)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


class GenerateQuizView(APIView):
    def post(self, request):
        try:
            pdf_file = request.FILES['file']
            data = quizzer(pdf_file)  # Call quiz generation function
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)